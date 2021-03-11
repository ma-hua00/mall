<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @navClick="navClick" ref="navbar"/>
    <scroll class="detail-scroll"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-image="topImage"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref="params" :params="paramsInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommends"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addToCart="addToCart"/>
  </div>
</template>

<script>

  import DetailNavBar from "views/detail/childComps/DetailNavBar";
  import {getDetail,Goods,Shop,Params,getRecommends} from "network/detail";
  import {itemListenerMixin,backTopMixin} from "common/mixin";
  import DetailSwiper from "views/detail/childComps/DetailSwiper";
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo";
  import Scroll from "components/common/scroll/scroll";
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo";
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo";
  import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo";
  import GoodsList from "components/content/goods/GoodsList";
  import DetailBottomBar from "views/detail/childComps/DetailBottomBar";


  export default {
    name: "Detail",
    components: {
      DetailBottomBar,
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
        recommends: [],
        themeTopYs:[],
        currentIndex:0
      }
    },
    mixins:[itemListenerMixin,backTopMixin],
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
        this.themeTopYs = []
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)

      },
      navClick(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],0)
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
        const positionY = -position.y

        let length = this.themeTopYs.length
        for (let i = 0 ; i < length - 1 ; i++){
          if (this.currentIndex !== i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]){
            this.currentIndex = i
            this.$refs.navbar.currentIndex = this.currentIndex
          }
        }

        // if (positionY > 0 && positionY < this.themeTopYs[1]){
        //   this.$refs.navbar.currentIndex = 0
        // }else if(positionY > this.themeTopYs[1] && positionY < this.themeTopYs[2]){
        //   this.$refs.navbar.currentIndex = 1
        // }else if (positionY > this.themeTopYs[2] && positionY < this.themeTopYs[3]){
        //   this.$refs.navbar.currentIndex=2
        // }else if(positionY > this.themeTopYs[3]){
        //   this.$refs.navbar.currentIndex=3
        // }
      },
      addToCart(){
        const product={}
        product.price = this.goods.realPrice
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.image = this.topImage[0]
        product.iid = this.iid

        this.$store.dispatch('addCart',product)
      }
    },
    destroyed() {
      this.$bus.$off('goodsItemImgLoad',this.itemImgListener)
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
    height: calc(100% - 93px);
    overflow: hidden;
  }
</style>
