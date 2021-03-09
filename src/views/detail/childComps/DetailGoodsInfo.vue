<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="left"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="right"></div>
    </div>
    <div class="info-key">
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div class="info-images">
      <div v-for="(item,index) in detailInfo.detailImage[0].list" class="images">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        image:0,
        imageLength: 0
      }
    },
    created() {
      // this.imageLength = this.detailInfo.detailImage
      // console.log(this.imageLength);
    },
    methods:{
      imageLoad(){
        this.imageLength = this.detailInfo.detailImage[0].list.length
          if(++ this.image === this.imageLength){
            this.$emit('imageLoad')
          }
      }
    },
  }
</script>

<style scoped>
  .goods-info{
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }
  .goods-info .info-desc{
    padding: 0 15px;
  }
  .goods-info .left,
  .goods-info .right{
    width: 90px;
    height: 1px;
    position: relative;
    background-color: #a3a3a5;
  }
  .goods-info .left{
    float: left;
  }
  .goods-info .right{
    float: right;
  }
  .info-desc .left::before,
  .info-desc .right::after {
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    content: "";
    background-color: #333333;
  }
  .info-desc .right::after{
    right: 0;
  }
  .goods-info .desc{
    padding: 20px 0;
    font-size: 14px;
  }
  .goods-info .info-key{
    margin: 15px 20px;
  }
  .info-key .key{
    font-size: 15px;
    color: #333333;
  }
  .goods-info .info-images{
    padding: 10px 0;
  }
  .info-images img{
    width: 100%;
  }
</style>
