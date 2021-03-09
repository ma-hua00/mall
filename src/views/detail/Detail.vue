<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :topImage="topImage"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :params="paramsInfo"/>
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
    </scroll>
  </div>
</template>

<script>

  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import {getDetail,Goods,Shop,Params,getRecommends} from "network/detail";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import Scroll from "components/common/scroll/scroll";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
  import GoodsList from "@/components/content/goods/GoodsList";


  export default {
    name: "Detail",
    components: {
      GoodsList,
      DetailCommentInfo,
      DetailParamInfo, DetailGoodsInfo, Scroll, DetailShopInfo, DetailBaseInfo, DetailSwiper, DetailNavBar},
    data(){
      return{
        iid:null,
        topImage:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        commentInfo:{},
        recommends: []
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详细数据
      getDetail(this.iid).then(res => {
        let data = res.result
        // console.log(data);
        //1.获取轮播图图片
        this.topImage = data.itemInfo.topImages
        //2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //3.获取商家信息
        this.shop = new Shop(data.shopInfo)
        //4.获取商品详细信息
        this.detailInfo = data.detailInfo
        //5.获取商品参数信息
        this.paramsInfo = new Params(data.itemParams.info,data.itemParams.rule)
        //6.获取评论信息
        if (data.rate.cRate !== 0){
          this.commentInfo = data.rate.list[0]
        }
        //7.获取推荐商品信息
        getRecommends().then(res => {
          this.recommends = res.data.list
        })
      })
    },
    methods:{
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
    height: 100vh;
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #ffffff;
  }
  .detail-scroll{
    height: calc(100% - 44px);
  }
</style>
