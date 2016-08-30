import { hashHistory } from 'dva/router';

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
    setup({dispatch,history}){
      console.log('history',history)
       history.listen(location =>{
         console.log('location',location)
         if(location.pathname === '/users'){
           console.log('users')
           dispatch({
             type:'querySuccess', //调用哪一个action
             payload:{}  //调用时传递的参数
           })
         }
       })
    }
  },
  effects: {
    *query(){},
    *create(){},
    *'delete'(){},
    *update(){},
  },
  reducers: {
    showLoading(){}, //控制加载状态的reducer
    showModal(){}, //控制modal显示状态的reducer
    hideModal(){},
    //使用静态数据返回
    querySuccess(state){
     const mock = {
        total: 3,
        current: 1,
        loading: false,
        list: [
          {
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            name: '王五',
            age: 25,
            address: '上海',
          },
        ]
      };
    return {...state, ...mock, };
    },
    createSuccess(){},
    deleteSuccess(){},
    updateSuccess(){},
  }
}
