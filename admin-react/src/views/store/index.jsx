import { legacy_createStore as createStore, combineReducers } from 'redux'
/**
 * 全局的reducer文件引入
 */
import configReducer from './reducer/config'
/**
 * 用户reduce引入
 */
import { userReducer } from './reducer/user'
/**
 * 部门的reducer引入
 */
import departmentReducer from './reducer/department'
/**
 * 初始化store，定义全局的store数据（状态）抽离到了config.js文件
 */

// const config = {
//     status: 999
// }

/**
 * 定义全局reducer函数 抽离到了config.js文件
 * @param {state} state 
 * @param {actiom} action 
 * @returns 
 */
// const configReducer = (state = config, action) => {
//     return state
// }

/**
 * 定义用户的Reducer函数，并定义状态state为[]抽离到了user.js文件
 * @param {state} state 
 * @param {action} action 
 * @returns 
 */
// const userReducer = (state = [], action) => {
//     return state
// }

/**
 * 定义部门的Reducer函数，并定义状态state为[]抽离到了department.js文件
 * @param {saate} state 
 * @param {action} action 
 * @returns 
 */
// const departmentReducer = (state = [], action) => {
//     return state
// }
/**
 * 将多个reducer函数组成一个新的对象，方便一次性注册
 */
const allReducer = {
    configReducer,
    userReducer,
    departmentReducer
}
/**
 * 注册多个reducer函数使用combineReducers，接收的是一个多个reducer函数组成的对象
 */
const rootReducer = combineReducers(allReducer)
/**
 * 注册reducer函数，创建Store实例
 */
const store = createStore(rootReducer)
/**
 * redux的安装 npm i --save redux
 * 
 * 建立store全局状态管理文件，定义action文件，
 * 
 * 定义reducer函数，reducer函数中有两个参数，第一个是初始化状态state,初始化为空则为state=[]
 * 
 * 如果有多个reducer函数需要注册，则需要combineReducers函数来对多个reducer函数组成的对象进行包裹(可能是个中间件，目前不太清楚)
 * 
 * 注册reducer函数通过createStore()方法，里面传入需要注册的reducer函数，如果是多个reducer函数需要注册，则直接传入combineReducers函数包裹之后的reducer对象
 * 
 * 获取stort的方法，通过store.getState()来获取状态
 */
export default store