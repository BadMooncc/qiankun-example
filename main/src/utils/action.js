
import { initGlobalState } from "qiankun";
 
const initialState = {
    //这里写初始化数据
    logo: "qiankun11",
    mes2: 0,
    app1Msg: 0, // 子应用app1的数据
};
 
// 初始化 state
const actions = initGlobalState(initialState);
// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {
  // 有key，表示取globalState下的某个子级对象
  // 无key，表示取全部
  return key ? initialState[key] : initialState
}
actions.onGlobalStateChange((state, prev) => {
    //监听公共状态的变化
    console.log("主应用: 变更前:", prev);
    console.log("主应用: 变更后:", state);
});

export default actions