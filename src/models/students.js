import { routerRedux } from 'dva/router'
import { message } from 'antd'
import { getTasks, getStudents, deleteStudent, updateStudent, createStudent } from '../services/students'

export default {
  namespace: 'students',
  state: {
    list: [],
    modalType: 'create',
    currentItem: {},
    info: {},
    modalVisible: false,

  },

  reducers: {
    save (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    showModal (state, { payload }) {
      return {
        ...state,
        ...payload,
        modalVisible: true,
      }
    },
    hideModal (state) {
      return {
        ...state,
        modalVisible: false,
      }
    },
  },

  subscriptions: {
    setup ({ dispatch }) {
      dispatch({ type: 'query' })
      dispatch({ type: 'getTasks' })
      // dispatch({ type: 'fetchCategories' })
    },
  },

  effects: {
    * query ({ payload = {} }, { call, put }) {
      const data = yield call(getStudents, payload)
      if (data.success) {
        yield put({
          type: 'save',
          payload: {
            list: data.raw,
          },
        })
      } else {
        message.error('Error fetching Students')
      }
    },

    * create ({ payload }, { call, put }) {
      const data = yield call(createStudent, payload)
      console.log(payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
        message.success('Student created successfully')
      } else {
        message.error('Student cannot be created')
      }
    },

    * update ({ payload }, { select, call, put }) {
      const id = yield select(({ students }) => students.currentItem.studentId)
      const data = yield call(updateStudent, id, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ type: 'query' })
        message.success('Student updated successfully')
      } else {
        message.error('Error updating Student')
      }
    },

    * deleteById ({ payload }, { call, put }) {
      const data = yield call(deleteStudent, payload)
      if (data.success) {
        message.success('Student Deleted')
        yield put({ type: 'query' })
      } else {
        message.error('Student can not be deleted')
      }
    },

  },
}