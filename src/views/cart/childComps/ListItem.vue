<template>
  <div class="list-item" v-if="Object.keys(product).length !== 0">
    <cart-selector class="item-check" @click.native="isSelect" :is-select="product.checked"/>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="list-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <span class="item-price">￥{{product.price}}</span>
        <span class="item-count">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import CartSelector from "views/cart/childComps/CartSelector";

export default {
  name: "ListItem",
  components: {CartSelector},
  props:{
    product:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    isSelect(){
      this.product.checked = ! this.product.checked
      this.$store.dispatch('CartItemSelect',this.product)
      console.log(this.product.checked);
    }
  }
}
</script>

<style scoped>
  .list-item{
    display: flex;
    border-bottom: 1px solid #cccccc;
    padding: 5px;
  }
  .item-check{
    margin: 40px 3px 0 3px;
  }
  .item-img{
    padding: 5px;
  }
  .item-img img{
    height: 100px;
    width: 80px;
    border-radius: 5px;
    object-fit: cover;
    display: block;
  }
  .item-title,
  .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .list-info{
    font-size: 17px;
    overflow: hidden;
    padding: 5px 10px;
    color: #333333;
    width: 88%;
    position: relative;
  }
  .list-info .item-desc{
    font-size: 14px;
    margin-top: 15px;
    color: #666666;
  }
  .info-bottom{
    position: relative;
    top: 30px;
  }
  .info-bottom .item-price{
    color: #ff4500;
  }
  .info-bottom .item-count{
    position: absolute;
    right: 0;
  }
</style>
