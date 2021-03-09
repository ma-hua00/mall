<template>
  <div class="shop-info" v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count big-font-size">{{shop.sells | sellCountFilter}}</div>
          <div class="sells-text small-font-size">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count big-font-size">{{shop.goodsCount}}</div>
          <div class="goods-text small-font-size">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" class="info-score">
            <td>{{item.name}}</td>
            <td :class="{'score-better':item.isBetter}" class="score">{{item.score}}</td>
            <td>
              <span :class="{'better-more':item.isBetter}" class="better">{{item.isBetter ? '高' : '低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="shop-into">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      sellCountFilter(value){
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
  }
</script>

<style scoped>
  .shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }
  .shop-top{
    line-height: 45px;
    align-items: center;
    display: flex;
  }
  .shop-top img{
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .shop-top span{
    margin-left: 10px;
    color: #333333;
    vertical-align: center;
    font-size: 20px;
  }
  .shop-middle{
    display: flex;
    margin: 30px 10px;
    font-size: 13px;
    align-items: center;
    color: #333333;
  }
  .shop-middle-left{
    display: flex;
    font-size: 18px;
    text-align: center;
  }
  .shop-middle div{
    flex: 1;
  }
  .small-font-size{
    font-size: 14px;
  }
  .shop-middle-right table{
    padding-left: 26px;
  }
  .shop-middle-right .score{
    color: #5ea732;
    padding: 4px 5px;
  }
  .shop-middle-right .better{
    color: #ffffff;
    background-color: #5ea732;
  }
  .shop-middle-right .score-better{
    color: #f13e3a;
  }
  .shop-middle-right .better-more{
    background-color: #f13e3a;
  }
  .shop-bottom{
    margin-top: 10px;
    text-align: center;
  }
  .shop-bottom .shop-into{
    font-size: 14px;
    line-height: 30px;
    display: inline-block;
    width: 120px;
    height: 30px;
    text-align: center;
    background-color: #f2f5f8;
    border-radius: 20px;
  }
</style>
