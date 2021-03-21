<template>
  <transition name="fade">
    <div class="toast" v-if="isShow">
      <div class="toast-title">{{title}}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return{
      title:'',
      isShow: false
    }
  },
  methods:{
    show(title = '',duration = 1500){
      this.isShow = true
      this.title = title
      setTimeout(() => {
        this.isShow = false
        this.title = ''
      },duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0,0,0,.75);
  padding: 20px 20px;
  border-radius: 20px;
  color: #ffffff;
  z-index: 100;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
