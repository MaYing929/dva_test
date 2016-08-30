import { hashHistory } from 'dva/router';
import { query } from '../services/users';


export default {
  namespace:'users',

  state: {
    list:[],
    total:null,
    loading:false, //控制加载状态
    current:null,  //当前分页信息
    currentItem:{},   //当前操作的用户对象
    modalVisible :false, //弹出框的显示状态
    modalType:'create' //弹出框的类型（添加用户，编辑用户）

  },
  subscriptions: {
    setup({ dispatch,history }){
       history.listen(location =>{
         if(location.pathname === '/users'){
           dispatch({
             type:'querySuccess', //调用哪一个action
             payload:{}  //调用时传递的参数
           })
         }
       })
    }
  },
  effects: {
    // 简单理解 call 是调用执行一个函数而 put 则是相当于 dispatch 执行一个 action，而 select 则可以用来访问其它 model
    *query({ payload }, { select, call, put }) {
    yield put({ type: 'showLoading' });
    const { data } = yield call(query);
    if (data) {
      yield put({
        type: 'querySuccess1',
        payload: {
          list: data.data,
          total: data.page.total,
          current: data.page.current
        }
      });
    }
  },
    *create(){},
    *'delete'(){},
    *update(){},
  },
  reducers: {
    // showLoading(state, action){
    //   return { ...state, loading: true }
    // }, //控制加载状态的reducer
    showModal(){}, //控制modal显示状态的reducer
    hideModal(){},
    //使用静态数据返回
    querySuccess(state, action){
    return {...state, ...action.payload, loading: true};
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){},
  }
}
