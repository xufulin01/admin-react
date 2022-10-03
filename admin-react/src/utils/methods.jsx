/**
 * 获取url地址里面的路由信息
 */
export const setParamsMethod = (value) => {
    return value.split('/').slice(0, value.split('/').length - 1).join('/')
}
/**
 * 获取views下的文件名和文件
 */
const files = require.context("../views", true, /\.jsx/);

const preRouterList = files.keys().map((key) => {
    /**过滤login文件夹的文件 */
    if (key.includes("./login")) return false;
    /**过滤router文件夹下的文件 */
    if (key.includes("./router")) return false;
    /**过滤layout文件夹下的文件 */
    if (key.includes("./layout")) return false;
    const filesObj = {}
    const splictFilesName = key.split("/")
    /***对文件路径进行处理 */
    const path = `/home/${splictFilesName.slice(1, splictFilesName.length - 1).join("/")}`;
    /**获取文件路径相对应的组件 */
    const component = files(key) || files(key).default;
    /**获取组件路径 */
    filesObj.path = path;
    /**获取组件名并通过组件名获得组件 */
    filesObj.component = component[path.split("/").slice(splictFilesName.length - 1).join().toLowerCase().split(/\s+/).map((item, index) => {
        return item.slice(0, 1).toUpperCase() + item.slice(1);
    }).join(' ')]
    return filesObj
});
/**去除数组中的undefined */
export const routerList = preRouterList.filter(item => {
    return item !== false
})
