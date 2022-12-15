import cookies from 'react-cookies';

const adminToken = "admintoken";
const user = "userbame";

/**
 * 在cookie存储token
 * @param {token} value 
 */
export const setToken = (value) => {
    cookies.save(adminToken, value)
}

/**
 * 在cookie获取token
 */
export const getToken = () => {
    return cookies.load(adminToken)
}
/**
 * 在cookie存储username
 * @param {username} value 
 */
export const setUser = (value) => {
    cookies.save(user, value)

}
/**
 * 在cookie获取username
 */
export const getUser = () => {
    return cookies.load(user)
}
/**
 * 删除cookie
 */
export const deteleCookie = () => {
    cookies.remove(adminToken, { path: '/' })
    cookies.remove(user, { path: '/' })
}
/**
 * 设置cookie失效时间为1小时
 *
 */
export const setTokenTime = () => {
    const inFifteenMinutes = new Date(new Date().getTime() + 1 * 3600 * 1000);
    cookies.save(adminToken, user, { expires: inFifteenMinutes })
}