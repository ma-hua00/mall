<template>
  <div id="home">
    <nav-bar class = "home-nav"><div slot = "center">购物街</div></nav-bar>
    <tab-control
      :titles = "['流行','新款','精选']"
      class = "tab-control"
      @tabClick = "tabClick"
      ref="tabcontrol1"
      v-show="isTabShow"/>
    <scroll class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper :list = "banners" @HomeSwiperImgLoad="HomeSwiperImgLoad"></home-swiper>
      <home-recommend-view :recommends = "recommends"/>
      <feature-view/>
      <tab-control
        :titles = "['流行','新款','精选']"
        @tabClick = "tabClick"
        ref="tabcontrol2"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home";
  import {getHomeGoods} from "network/home";
  import {debounce} from "common/utils";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import HomeSwiper from "views/home/childComps/HomeSwiper";
  import Scroll from "components/common/scroll/scroll";
  import BackTop from "components/content/backTop/BackTop";


  import HomeRecommendView from "./childComps/HomeRecommendView";
  import FeatureView from "views/home/childComps/FeatureView";
  import GoodsList from "components/content/goods/GoodsList";



  export default {
    name: "Home",
    components: {
      BackTop,
      Scroll,
      GoodsList,
      TabControl,
      FeatureView,
      NavBar,
      HomeSwiper,
      HomeRecommendView,
    },
    data(){
      return {
        banners: [],
        recommends: [],
        goods:{
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        goodstype:'pop',
        scroll:null,
        isShowBackTop:false,
        tabOffSetTop:0,
        isTabShow:false,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.goodstype].list
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scrollY()
    },
    created() {
      //1.请求多个数据
      this.getHomeMultidata()

      //2.请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    mounted() {
      //监听goodsitem中图片加载完成
      const refresh = debounce(this.$refs.scroll.refresh,50)

      this.$bus.$on('goodsItemImgLoad', () => {
        if (this.$refs.scroll !== undefined){
          refresh()
        }
      })
    },
    methods:{
      /*
      * 监听事件的方法
      * */
      tabClick(index){
        switch (index){
          case 0:
            this.goodstype = 'pop'
          break
          case 1:
            this.goodstype = 'new'
          break
          case 2:
            this.goodstype = 'sell'
          break
        }
        this.$refs.tabcontrol1.currentIndex=index
        this.$refs.tabcontrol2.currentIndex=index
      },

      HomeSwiperImgLoad(){
        this.tabOffSetTop = this.$refs.tabcontrol2.$el.offsetTop
      },



      // 返回顶部方法
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },

      contentScroll(position){
        this.isShowBackTop = (-position.y) > 1000
        this.isTabShow = (-position.y) > this.tabOffSetTop
      },

      loadMore(){
        this.getHomeGoods(this.goodstype)
      },

      /*
      * 网络请求的方法
      * */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        let page = this.goods[type].page +  1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    position: relative;
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }

  /*设置BScroll的高度*/
  /*方法1*/
  .content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


  /*方法2*/
  /*.content{*/
  /*  height: calc(100% - 93px);*/
  /*  overflow: hidden;*/
  /*  margin-top: 44px;*/
  /*}*/
</style>
