import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  CART_IS_SELECT,
  CART_CHECK_ALL_SELECT,
  CART_IS_CHECK_ALL,
  CART_UN_CHECK_ALL,
  UPDATE_CART_TOTAL_PRICE,
  UPDATE_CART_SELECT,
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
    context.commit(UPDATE_CART_TOTAL_PRICE)
    if (payload.checked){
      context.commit(CART_IS_SELECT,1)
    }else {
      context.commit(CART_IS_SELECT,-1)
    }
  },
  CartCheckAll(context){
    context.commit(CART_CHECK_ALL_SELECT)
    if (context.state.allSelect){
      context.commit(CART_IS_CHECK_ALL)
      context.commit(UPDATE_CART_TOTAL_PRICE)
      context.commit(CART_IS_SELECT,'selectAll')
    }else {
      context.commit(CART_UN_CHECK_ALL)
      context.commit(UPDATE_CART_TOTAL_PRICE)
      context.commit(CART_IS_SELECT,'unSelectAll')
    }
  }
}
