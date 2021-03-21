<template>
  <div id="category">
    <nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @currentIndex="menuSelected"/>
      <scroll class="category-scroll" ref="scroll">
        <type-list :subcategories="subcategories"></type-list>
        <tab-control
          :titles = "['综合','新品','销量']"
          @tabClick="tabClick"/>
        <goods-list :goods="showGoods"/>
      </scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from "views/category/childComps/TabMenu";
import NavBar from "components/common/navbar/NavBar";

import {getCategory,getSubcategory,getSubCategoriesDetail} from 'network/category'
import {itemListenerMixin} from "common/mixin";
import TypeList from "views/category/childComps/typeList";
import Scroll from "components/common/scroll/scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";


export default {
  name: "Category",
  components: {GoodsList, TabControl, Scroll, TypeList, NavBar, TabMenu},
  mixins:[itemListenerMixin],
  data(){
    return {
      categories:[],
      subcategories:[],
      currentIndex:-1,
      goodstype:'pop',
      goods:{
        'pop':[],
        'new':[],
        'sell':[]
      }
    }
  },
  computed:{
    showGoods() {
      if (this.currentIndex === -1) return []
      return this.goods[this.goodstype]
    }
  },
  created() {
    this._getCategory()
  },
  methods:{
    _getCategory(){
      getCategory().then(res => {
        this.categories = res.data.category.list;
        this._getSubCategories(0)
      })
    },
    _getSubCategories(index){
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey
      getSubcategory(maitKey).then(res => {
        this.subcategories = res.data.list
        this._getSubCategoriesDetail('pop')
        this._getSubCategoriesDetail('new')
        this._getSubCategoriesDetail('sell')
      })
    },
    _getSubCategoriesDetail(type){
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      getSubCategoriesDetail(miniWallkey,type).then(res => {
        this.goods[type] = res
      })
    },
    menuSelected(index){
      this._getSubCategories(index)
    },
    tabClick(index) {
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
    }
  }
}
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .category-nav{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: bold;
  }
  .content{
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
  }
  .category-scroll{
    height: calc(100% - 10px);
    overflow: hidden;
  }
</style>
