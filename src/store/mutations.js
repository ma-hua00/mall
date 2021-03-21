import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  CART_SELECT_ALL_CHANGE,
} from './mutationsType'


export default {
  //mutations唯一的目的就是修改state中状态
  //mutations中的每个方法尽可能完成的事件比较单一一点

  //cartList的counter+1
  [ADD_CART_LIST_COUNT](state,payload){
    payload.count++
  },
  [PUSH_CART_LIST](state,payload){
    payload.checked = false
    state.cartList.push(payload)
  },
  [CART_SELECT_ALL_CHANGE](state,payload){
    //forEach高阶函数 遍历并修改内容
    state.cartList.forEach(item => item.checked = payload)
  },
}
