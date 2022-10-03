import axios from "axios";
// 拦截器
// 创建实例
const service = axios.create({
  baseURL: process.env.REACT_APP_API,
  timeout: 5000,
});
// 请求拦截
service.interceptors.request.use(
  function (config) {
    // 发送请求之前的处理
    console.log(process.env.REACT_APP_API);
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
    return response;
  },
  function (error) {
    // 数据响应错误的处理
    return Promise.reject(error);
  }
);
export default service;
