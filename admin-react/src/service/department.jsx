import service from '@/utils/request'
/**
 * 添加部门接口
 * @param {number,name,rember} data 
 * @returns 
 */
export const additionService = (data) => {
    return service.request({
        url: "/api/addition",
        method: "get",
        params: data
    })
}
// /department/list
/**
 * 获取部门列表
 * @param {*} data 
 * @returns 
 */
export const departmentListService = (data) => {
    return service.request({
        url: "/api/department/list",
        method: "get",
        params: data
    })
}

// /department/delete
/**
 * 部门删除接口
 * @param {id} data 
 * @returns 
 */
export const departmentDeleteService = (data) => {
    return service.request({
        url: "/api/department/delete",
        method: "get",
        params: data
    })
}
/**
 * 修改部门数据接口
 * @param {data} data 
 * @returns 
 */
export const departmentUpdataService = (data) => {
    return service.request({
        url: "/api/department/updata",
        method: "get",
        params: data
    })
}
// /department/detial
export const departmentDetialService = (data) => {
    return service.request({
        url: "/api/department/detial",
        method: "get",
        params: data
    })
}