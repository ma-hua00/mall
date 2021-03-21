<template>
  <div class="bottom-bar">
    <div class="item-select">
      <cart-selector
        class="selector"
        :isSelect="selectAll"
        @click.native="checkClick(selectAll)"/>
      <span>全选</span>
    </div>
    <div class="item-total">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="item-button">
      <div>去计算({{checkLength}})</div>
    </div>
  </div>
</template>

<script>
import CartSelector from "views/cart/childComps/CartSelector";
import {mapGetters} from "vuex";
export default {
  name: "CartBottomBar",
  components: {CartSelector},
  computed:{
    ...mapGetters(['CartList']),
    totalPrice(){
      return this.CartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checkLength(){
      return this.CartList.filter(item => item.checked).length
    },
    selectAll(){
      if (this.CartList.length === 0) return false
      return !this.CartList.find(item => !item.checked)//没有被选中的话返还false 全部选中返还true
    }
  },
  methods:{
    checkClick(condition){
      this.$store.dispatch('cartSelectAll',condition)
    },
  }
}
</script>

<style scoped>
  .bottom-bar{
    border-top: 1px solid #cccccc;
    height: 50px;
    display: flex;
    position: relative;
    align-items: center;
    font-size: 15px;
    background-color: #eee;
  }
  .bottom-bar>div{
    flex: 1;
  }
  .item-select{
    text-align: center;
    display: flex;
    align-items: center;

  }
  .item-select .selector{
    margin: 0 5px 0 10px;
  }
  .item-button{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    border: 0;
    background: linear-gradient(to right, #ff6034, #ee0a24);
  }
</style>
