<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    //1.创建Bscroll
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad
    })
    //2.监听滚动位置
    this.scroll.on('scroll', (position) => {
      this.$emit('scroll',position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods:{
    scrollto(x , y , time = 300){
      this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>

</style>
