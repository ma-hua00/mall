<template>
  <div class="home-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in list" :key="item.id" class="swiper-item">
        <a :href="item.link">
          <img :src="item.image" alt="" class="swiper-img" @load="ImgLoad">
        </a>
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
      },
      isLoad:false
    }
  },
  props:{
    list:{
      type:Array,
      required:true
    }
  },
  methods:{
    ImgLoad(){
      if ( !this.isLoad){
        this.$emit('HomeSwiperImgLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
.home-swiper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  position: relative;
}
.swiper-img{
  width: 100%;
}
.swiper-pagination{
  position: absolute;
  bottom: 4px;
  --swiper-theme-color: rgba(212,62,46,1.0);
}
</style>
