<template>
  <div class="param-info" v-if="Object.keys(params).length !== 0">
    <p>参数信息</p>
    <div>
      <table v-for="table in params.size" class="info-size">
        <tr v-for="tr in table" class="size-tr">
          <td v-for="td in tr" class="size-td">{{td}}</td>
        </tr>
      </table>
    </div>
    <div>
      <table class="info-parameter">
        <tr v-for="item in params.set">
          <td class="key">{{item.key}}</td>
          <td class="value">{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div v-if="Object.keys(params.image).length !== 0" class="info-img">
      <img :src="params.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      params:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
  }
  .param-info p{
    font-size: 15px;
    margin-bottom: 10px;
  }
  .param-info .info-size{
    width: 100%;
    border-collapse: collapse;
    border-bottom: 3px solid #f2f5f8;
  }
  .info-size .size-tr{
    height: 42px;
  }
  .info-size .size-td{
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .param-info .info-parameter{
    width: 100%;
    border-collapse: collapse;
  }
  .info-parameter tr{
    height: 42px;
  }
  .info-parameter td{
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-parameter .value{
    padding-left: 60px;
    color: var(--color-high-text);
  }
  .info-img{
    padding: 10px 0;
  }
  .info-img img{
    width: 100%;
  }
</style>
