<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{Length}})</div>
    </nav-bar>
    <scroll class="cart-scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar class="cart-bottom"/>
  </div>
</template>

<script>

import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import CartBottomBar from "views/cart/childComps/CartBottomBar";
import Scroll from "components/common/scroll/scroll";
import {mapGetters} from 'vuex'


export default {
  name: "Cart",
  components: {Scroll, CartBottomBar, CartList, NavBar},
  computed:{
    //mapGetters的两种用法
    //1.数组用法
    // ...mapGetters(['CartLength','CartList'])
    //2.对象用法
    ...mapGetters({
      Length:'CartLength',
      List:'CartList'
    })
  },
  activated() {
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
  #cart{
    height: 100vh;
  }
  .cart-nav{
    background-color: #ff8198;
    color: #fff;
    font-weight: 600;
  }
  .cart-scroll{
    height: calc(100% - 143px);
    overflow: hidden;
  }
  .cart-bottom{
    position: fixed;
    width: 100%;
  }
</style>
