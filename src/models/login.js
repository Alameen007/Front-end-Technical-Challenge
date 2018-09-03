import { routerRedux } from 'dva/router'
import { message } from 'antd'
import { register, login } from '../services/login'

export default {
  namespace: 'login',
  state: {
    user: [],
    loginVisible: true,
    registerVisible: false,
    loginLoading: false,
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
    showLoginLoading (state) {
      return {
        ...state,
        loginLoading: true,
      }
    },
    hideLoginLoading (state) {
      return {
        ...state,
        loginLoading: false,
      }
    },
  },

  effects: {
    *login (payload, { call, select, put }) {
      yield put({ type: 'showLoginLoading' })
      const { admin } = payload
      const response = yield call(login, admin)
      yield put({ type: 'hideLoginLoading' })
      const { raw, success } = response
      if (success) {
        localStorage.setItem('token', raw.token)
        localStorage.setItem('user', JSON.stringify(raw.user))
        yield put(routerRedux.push('/students'))
      } else {
        message.error(response.message)
      }
    },

    *checkToken (paylod, { put }) {
      const { token } = paylod

      if (token !== '') {
        console.log('token is available')
        yield put(routerRedux.push('/students'))
      }
    },
  },
}
