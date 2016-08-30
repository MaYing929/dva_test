
// 处理异步请求
import  request from '../utils/request';
//request 是封装的一个网络请求库
import qs from 'qs';

 export async function query(params){
   return request(`/api/users?${qs.stringify(params)}`);
 }
