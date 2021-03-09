<template>
  <div class="detail-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in topImage" :key="item.id" class="swiper-item">
          <img :src="item" alt="" class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data(){
    return{
      swiperOptions:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:2000,
        autoplayDisableOnInteraction : false,
      }
    }
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  overflow: hidden;
  width: 100%;
  height: 300px;
  padding-bottom: 60%;
  position: relative;
}
.swiper-img{
  width: 100%;
}
.swiper-pagination{
  position: absolute;
  bottom: 190px;
  --swiper-theme-color: rgba(212,62,46,1.0);
}
</style>
