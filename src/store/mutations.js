import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  CART_IS_SELECT,
  CART_CHECK_ALL_SELECT,
  CART_IS_CHECK_ALL,
  CART_UN_CHECK_ALL,
  UPDATE_CART_TOTAL_PRICE,
  UPDATE_CART_SELECT
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
  [UPDATE_CART_TOTAL_PRICE](state){
    state.totalPrice = 0
    for (let item of state.cartList){
      if (item.checked){
        state.totalPrice += (Number(item.price) * Number(item.count))
      }
    }
  },
  [CART_IS_SELECT](state,payload){
    if (payload === 'selectAll'){
      state.cartSelect = state.cartList.length
    }else if (payload === 'unSelectAll'){
      state.cartSelect = 0
    }else {
      state.cartSelect += payload
      if (state.cartSelect === state.cartList.length){
        state.allSelect = true
      }else {
        state.allSelect = false
      }
    }
  },
  [CART_CHECK_ALL_SELECT](state){
    state.allSelect = !state.allSelect
  },
  [CART_IS_CHECK_ALL](state){
    for (let item of state.cartList){
      item.checked = true
    }
  },
  [CART_UN_CHECK_ALL](state){
    for (let item of state.cartList){
      item.checked = false
    }
  }
}
