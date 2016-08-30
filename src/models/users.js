

import { hashHistory} from 'dva/router';

import { query } from '../services/users';
export default {

  namespace: 'users',

  state: {
    list: [],
    loading: false,
    total: null,
    current: 1,
    currentItem: {},
    modalVisible: false,
    modalType: 'create'
  },

  subscriptions: {
    setup({ dispatch,history }) {
      history.listen(location => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: location.query  //{} 不传递参数的时候
          });
        }
      });
    },
  },

  effects: {
 // 简单理解 call 是调用执行一个函数而 put 则是相当于 dispatch 执行一个 action，而 select 则可以用来访问其它 model
    *query({ payload }, { select, call, put }) {
      //  console.log('paylosad',payload)
          yield put({ type: 'showLoading' });
          const { data } = yield call(query);
          // const { data } = yield call(query, payload);
          if (data) {
            yield put({
                type: 'querySuccess',
                payload: {
                  list: data.data,
                  total: data.page.total,
                  current: data.page.current
                }
        });
          }
        },
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    querySuccess(state, action) {

      return { ...state, ...action.payload, loading: false };
    },

  }
};
