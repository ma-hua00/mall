import {
  ADD_CART_LIST_COUNT,
  PUSH_CART_LIST,
  CART_SELECT_ALL_CHANGE,
} from './mutationsType'

export default {
  addCart(context,payload){
    return new Promise((resolve, reject) => {
      //1.查找数组是否存在该商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      //2.判断oldProduct
      if (oldProduct){
        context.commit(ADD_CART_LIST_COUNT,oldProduct)
        resolve('该商品数量+1')
      }else {
        payload.count = 1
        context.commit(PUSH_CART_LIST,payload)
        resolve('添加了新的商品')
      }
    })
  },
  cartSelectAll(context,payload){
    context.commit(CART_SELECT_ALL_CHANGE,!payload)
  }
}
