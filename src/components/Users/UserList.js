import React, { PropTypes } from 'react';

import {Table,message,Popconfirm} from 'antd';


 const UserList =({
   total,
   current,
   loading,
   dataSource
 }) =>{
   console.log('dataSource',dataSource)

   const columns = [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
          }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
           }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
              <p>
                <a onClick={()=>{}}>编辑</a>
                &nbsp;
                <Popconfirm title="确定要删除吗？" onConfirm={()=>{}}>
                  <a>删除</a>
                </Popconfirm>
              </p>
            ),
          }];

          //定义分页对象
          const pagination = {
            total,
            current,
            pageSize:5,
            onchange:()=>{},
          };

          return (
            <div>
            <Table
             columns={columns}
             dataSource={dataSource.data}
             loading={loading}
             rowkey={record =>record.id}
             pagination={pagination}
            />
            </div>
          )


 }


export default UserList
