import React, { PropTypes } from 'react';
import { Link } from 'dva/router';

function Zhu(){
  return (
    <div>我是主页,你可以去<Link to={"/users"}>列表页</Link></div>
  );
}

Zhu.PropTypes = {};

export default Zhu;
