<template>
  <div>
    <detail-nav-bar/>
    <detail-swiper :topImage="topImage"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script>

  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import {getDetail,Goods,Shop} from "network/detail";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";

  export default {
    name: "Detail",
    components: {DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavBar},
    data(){
      return{
        iid:null,
        topImage:[],
        goods:{},
        shop:{}
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详细数据
      getDetail(this.iid).then(res => {
        let data = res.result
        console.log(data);
        //1.获取轮播图图片
        this.topImage = data.itemInfo.topImages

        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3.获取商家信息
        this.shop = new Shop(data.shopInfo)
      })

    },
    methods:{

    }
  }
</script>

<style scoped>

</style>
