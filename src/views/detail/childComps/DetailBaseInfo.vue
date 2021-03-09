<template>
  <div class="base-info" v-if="Object.keys(goods).length != 0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="new-price">{{goods.newprice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span
        class="discount"
        v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <div v-for="index in goods.columns.length - 1">
        <span>{{goods.columns[index-1]}}</span>
      </div>
        <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-services">
      <div v-for="index in goods.services.length - 1" class="info-services-item">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 10px;
    border-bottom: 5px solid #f2f5f8;
  }
 .info-title{
   text-align: justify;
   color: #222222;
 }
 .info-price{
   margin-top: 10px;
 }
 .new-price{
   font-size: 24px;
   color: var(--color-tint);
 }
 .old-price{
   font-size: 13px;
   margin-left: 5px;
   text-decoration: line-through;
 }
 .discount{
   position: relative;
   top: -4px;
   margin-left: 5px;
   border-radius: 8px;
   padding: 3px 6px;
   font-size: 12px;
   color: #ffffff;
   background: var(--color-high-text);
 }
 .info-other{
   display: flex;
   font-size: 13px;
   margin-top: 15px;
   line-height: 30px;
   border-bottom: 1px solid rgba(100, 100, 100, 0.1);
 }
 .info-other div{
   flex: 1;
 }
 .info-services{
   display: flex;
   line-height: 60px;
   justify-content: space-between;
 }
 .info-services-item img{
   width: 14px;
   height: 14px;
   position: relative;
   top: 2px;
 }
 .info-services-item span{
   font-size: 13px;
   color: #333333;
   margin-left: 5px;
 }
</style>
