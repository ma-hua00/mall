<template>
  <div class="cart-list">
    <list-item
      v-for="item of List"
      @click.native="click(item)"
      :product="item"/>
  </div>
</template>

<script>

import ListItem from "views/cart/childComps/ListItem";
import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {ListItem},
    computed:{
      ...mapGetters({
        List:'CartList'
      })
    },
    methods:{
      click(item){
        console.log(item);
      }
    }
  }
</script>

<style scoped>

</style>
