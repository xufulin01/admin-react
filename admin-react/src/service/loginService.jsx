import service from '../utils/request'
/**
 * 登录接口
 */
export const loginService = (data) => {
    return service.request({
        url: "/api/login",
        method: "get",
        params: data
    })
}
export const retisterService = (data) => {
    return service.request({
        url: "/api/insert",
        method: "get",
        params: data
    })
}