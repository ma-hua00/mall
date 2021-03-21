<template>
  <div class="type-list" v-if="Object.keys(subcategories).length !== 0">
    <type-list-item v-for="(item,index) in subcategories" :type-list="item"/>
  </div>
</template>

<script>
import TypeListItem from "@/views/category/childComps/TypeListItem";
export default {
  name: "typeList",
  components: {TypeListItem},
  props:{
    subcategories:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .type-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>
