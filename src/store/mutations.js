import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  ADD_CART_TOTAL_PRICE,
  MINUS_CART_TOTAL_PRICE,
  CART_IS_SELECT,
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
  [ADD_CART_TOTAL_PRICE](state,payload){
    state.totalPrice += payload.price * 1
  },
  [MINUS_CART_TOTAL_PRICE](state,payload){
    state.totalPrice -= payload.price * 1
  },
  [CART_IS_SELECT](state,payload){
    state.cartSelect += payload
  },
}
