<template>
  <div class="bottom-bar">
    <div class="item-select">
      <cart-selector class="selector"/>
    </div>
    <div class="item-total">
      <span>合计:￥{{this.$store.state.totalPrice}}</span>
    </div>
    <div class="item-button">
      <div>去计算({{this.$store.state.cartSelect}})</div>
    </div>
  </div>
</template>

<script>
import CartSelector from "@/views/cart/childComps/CartSelector";
export default {
  name: "CartBottomBar",
  components: {CartSelector}
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
  }
  .bottom-bar>div{
    flex: 1;
  }
  .item-select{
    text-align: center;
  }
  .selector{
    background-color: red;
  }
  .item-total{

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
