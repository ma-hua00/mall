<template>
  <scroll id="tab-menu">
    <div class="tab-menu">
      <div
        class="menu-item"
        v-for="(item,index) in categories"
        @click="itemClick(index)"
        :class="{ active: index == currentIndex }">
        <div>{{item.title}}</div>
      </div>
    </div>
  </scroll>
</template>

<script>

import Scroll from "components/common/scroll/scroll";


export default {
  name: "TabMenu",
  components: {Scroll},
  data(){
    return{
      currentIndex:0
    }
  },
  props:{
    categories:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('currentIndex',index)
    }
  }



}
</script>

<style scoped>
  #tab-menu{
    height: 100%;
    background-color: #f6f6f6;
    width: 100px;
    /*box-sizing: border-box;*/
  }
  .tab-menu{
    background-color: #f6f6f6;
    width: 100px;
    height: 100%;
    text-align: center;
    font-size: 12px;
  }
  .menu-item{
    height: 46px;
    line-height: 46px;
  }
  .active{
    color: var(--color-high-text);
    border-left: 3px solid var(--color-high-text);
    background-color: #ffffff;
    font-weight: bold;
  }
</style>
