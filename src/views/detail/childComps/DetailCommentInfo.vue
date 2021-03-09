<template>
  <div class="comment-info" v-if="Object.keys(commentInfo).length !== 0">
    <div class="info-top">
      <div class="left">用户评价</div>
      <div class="right">更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <div>{{commentInfo.user.uname}}</div>
    </div>
    <div class="info-content">
      <div>{{commentInfo.content}}</div>
    </div>
    <div class="goods-message">
      <span class="date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-img" v-for="item in commentInfo.images">
      <img :src="item" alt="">
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate:function (value){
        const date = new Date(value * 1000)
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 15px 10px;
    font-size: 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .comment-info .info-top{
    position: relative;
    height: 32px;
    color: #333333;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-top .left{
    float: left;
  }
  .info-top .right{
    float: right;
  }
  .comment-info .info-user{
    margin: 10px 0;
    display: flex;
    align-items: center;
    color: #333333;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .comment-info .info-content{
    margin: 10px 0;
    font-size: 13px;
    color: #777777;
    line-height: 1.5;
  }
  .goods-message{
    margin: 10px 0;
    font-size: 12px;
    color: #999999;
  }
  .goods-message .date{
    margin-right: 5px;
  }
  .info-img{
    margin-top: 10px;
    display: inline-block;
  }
  .info-img img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
