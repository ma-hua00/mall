<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :goodsitem="item"/>
  </div>
</template>

<script>

import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {GoodsListItem},
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created() {
    console.log(this.goods);
  }
}
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
