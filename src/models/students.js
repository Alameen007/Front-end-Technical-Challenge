import { routerRedux } from 'dva/router'
import { message } from 'antd'
import { getTasks, getStudents, getStudentById, deleteStudent, updateStudent, createStudent, searchedStudents } from '../services/students'

export default {
  namespace: 'students',
  state: {
    list: [],
    modalType: 'create',
    currentItem: {},
    info: {},
    modalVisible: false,
    searchToken: '',
    tableLoading: false,

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

    *searchedStudents (payload, { call, put, select }) {
      const { value } = payload
      let searchToken = yield select(({ students }) => students.searchToken)
      if (searchToken.length < 1) {
        searchToken = value
      }
      const data = {
        searchToken,
      }
      yield put({
        type: 'save',
        payload: { tableLoading: true },
      })
      const response = yield call(searchedStudents, data)
      yield put({
        type: 'save',
        payload: { tableLoading: false },
      })
      const { success, raw } = response

      if (success) {
        yield put({
          type: 'save',
          payload: {
            list: raw,
          },
        })
      } else {
        message.error(response.message)
      }
    },

    * create ({ payload }, { call, put }) {
      const data = yield call(createStudent, payload)
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
        yield put({
          type: 'save',
          payload: {
            currentItem: data.raw,
          },
        })
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

    *getStudentById (payload, { select, call, put }) {
      const { id } = payload
      const response = yield call(getStudentById, id)
      console.log(response)

      const { success, raw } = response
      if (success) {
        yield put({
          type: 'save',
          payload: {
            info: raw,
          },
        })
      } else {
        message.error(response.message)
      }
    },

  },
}
