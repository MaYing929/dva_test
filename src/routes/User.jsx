import React, { PropTypes } from 'react';

// 引入 connect 工具函数
import { connect } from 'dva';

//user的presentational component
import UserList from '../components/Users/UserList';
import UserSearch from '../components/Users/UserSearch';
import UserModal from '../components/Users/UserModal';

 //引入对应的样式
 import styles from './Users.less'
 function Users({ location, dispatch, users }){

  const {loading, list, total, current, currentItem, modalVisible, modalType} = users;
  console.log('view loading', loading)
  const  userSearchProps = {};
  const  userListProps = {
    dataSource: list,
    total,
    loading,
    current
  };
  const  userModalProps = {};
  return (
    <div className={styles.normal}>

     {/* 用户筛选输入框 */}
    <UserSearch {...userSearchProps} />
     {/* 用户信息展示列表 */}
     <UserList  {...userListProps}/>
     {/* 添加用户修改用户弹出的浮层 */}
    <UserModal {...userModalProps} />


    </div>
  );
}

Users.PropTypes = {
  users: PropTypes.object,
};

// 指定订阅数据，这里关联了usres

function mapStateToProps({ users }) {
  return {users};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);
