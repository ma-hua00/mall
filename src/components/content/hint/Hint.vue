<template>
  <div class="hint">
    <div class="title">{{titles}}</div>
  </div>
</template>

<script>
export default {
  name: "Hint",
  props:{
    titles:{
      type:String,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .hint{
    position: fixed;
    right: 25%;
    bottom: 50%;
  }
  .hint .title{
    width: 140px;
    height: 70px;
    background-color: #333333;
    color: #ffffff;
    font-size: 13px;
    line-height: 70px;
    text-align: center;
    border-radius: 20px;
  }
</style>
