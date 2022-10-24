const userState = {
  user: "用户",
};

/**
 * 定义reduce中的action函数
 */
export const dispatchMethods = {
  CHANGE_VALUE: "CHANGE_VALUE",
};
/**
 * 定义用户的Reducer函数，并定义状态state为[]
 * @param {state} state
 * @param {action} action
 * @returns
 */
export const userReducer = (state = userState, action) => {
  // const newstate = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case dispatchMethods.CHANGE_VALUE:
      // newstate.user = action.payload;
      // return newstate;
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
/**
 * action对象中的type属性，改变state的方法，payload为将要操作的数据
 *
 * 通过在reduce函数中action的方法来对state进行操作，redux中是不能直接改变state的值，也就是state，状态
 *
 * 而action对象是通过在store实例对象当中解构出来的dispatch方法来进行分发传递的
 *
 * 所以在调用方法的组件必须导入全局的store，从中解构出dispacth方法进行调用，并且将调用的方法，和值当做参数传入
 *
 * 而且reducer函数必须返回state,如果不需要返回，则可以返回null
 */
