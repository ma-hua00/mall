<template>
    <div
      class="item-selector"
      :class="{active : isSelect}">
      <img src="~assets/img/cart/tick.svg" v-if="isSelect"  alt="">
    </div>
</template>

<script>
  export default {
    name: "CartSelector",
    props:{
      isSelect:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        select:false
      }
    },
  }
</script>

<style scoped>
  .item-selector{
    border-radius: 50%;
    border: 2px solid #cccccc;
    width: 24px;
    height: 24px;
    text-align: center;
  }
  .active{
    background-color: #ff8198;
  }
</style>
