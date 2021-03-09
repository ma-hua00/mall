<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsitem.show.img" alt="" @load="imgload">
    <div class="item-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="like">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgload() {
      this.$bus.$emit('goodsItemImgLoad')
    },
    itemClick(){
      this.$router.push('/detail/'+ this.goodsitem.iid)
    }
  }
}
</script>

<style scoped>
  .goods-list-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .item-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    text-align: center;
    overflow: hidden;
    left: 0;
    right: 0;
  }
  .item-info p{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }
  .item-info .price{
    color: var(--color-high-text);
    margin-right: 20px;

  }
  .item-info .like{
    position: relative;
  }
  .item-info .like::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
