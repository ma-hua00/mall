import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,playload){
      let oldProduct = null
      for (let item in state.cartList){
        if (playload.iid === item.iid){
          oldProduct = item
        }
      }
      if (oldProduct){
        oldProduct.count++
      }else {
        playload.count = 1
        state.cartList.push(playload)
      }
    }
  }
})


//3。挂载vue实例上

export default store
