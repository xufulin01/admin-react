const adminToken = "admin";
/**
 * 存储token
 */
export const setToken = (value) => {
  sessionStorage.setItem(adminToken, value);
};
/**
 * 获取token
 */
export const getToken = () => {
  return sessionStorage.getItem(adminToken);
};
