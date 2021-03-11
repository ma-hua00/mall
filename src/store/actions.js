import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  ADD_CART_TOTAL_PRICE,
  MINUS_CART_TOTAL_PRICE,
  CART_IS_SELECT,
} from './mutationsType'

export default {
  addCart(context,payload){
    //1.查找数组是否存在该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

    //2.判断oldProduct
    if (oldProduct){
      context.commit(ADD_CART_LIST_COUNT,oldProduct)
    }else {
      payload.count = 1
      context.commit(PUSH_CART_LIST,payload)
    }
  },
  CartItemSelect(context,payload){
    if (payload.checked){
      context.commit(ADD_CART_TOTAL_PRICE,payload)
      context.commit(CART_IS_SELECT,1)
    }else {
      context.commit(MINUS_CART_TOTAL_PRICE,payload)
      context.commit(CART_IS_SELECT,-1)
    }
  }
}
