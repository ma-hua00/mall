<template>
  <div class="type-list-item">
      <a :href="typeList.link">
        <img :src="typeList.image" alt="" @load="imgLoad">
        <div>{{typeList.title}}</div>
      </a>
  </div>
</template>

<script>
export default {
  name: "TypeListItem",
  props:{
    typeList:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit('typeListImgLoad')
    }
  }
}
</script>

<style scoped>
  .type-list-item{
    width: 23%;
    margin: 24px 10px 0px 10px;
    text-align: center;
    font-size: 13px;
  }
  .type-list-item img{
    width: 100%;
    padding-bottom: 18px;
  }
</style>
