import axios from "axios";
import { getToken } from "./tokens";
// 拦截器
/**
 * axios实例
 */
const service = axios.create({
  baseURL: process.env.REACT_APP_API, //环境变量。在根目录的.env文件
  timeout: 5000, //设置超时时间
});
/**
 * 请求拦截，设置请求头的地方，给服务端传输token
 */
service.interceptors.request.use(
  function (config) {
    // 请求头传输token
    config.headers["Token"] = getToken();
    // 环境变量的打印
    // console.log(process.env.REACT_APP_API);
    return config;
  },
  function (error) {
    // 请求出错之后处理
    return Promise.reject(error);
  }
);
// 响应拦截
service.interceptors.response.use(
  function (response) {
    // 响应数据之前做的处理
    // 可在这里处理响应的数据，比如接口请求成功，但是数据有误的情况，即返回的code不为200、2000的异常情况，可以在此做异常处理
    // 注：调用的Promise.reject(err)报错时走的是借口请求，.then的第二个参数，then的第二个参数不存在的时候会直接走catch，造成错误穿透
    if (response.data.code === 200) {
      return response.data;
    } else {
      return response.data;
    }
  },
  function (error) {
    // 数据响应错误的处理
    return Promise.reject(error);
  }
);
export default service;
