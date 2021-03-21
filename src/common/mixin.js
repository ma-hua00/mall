import {debounce} from "common/utils";
import BackTop from "components/content/backTop/BackTop";

export const itemListenerMixin ={
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    //监听goodsItem中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.itemImgListener = () => {
      if (this.$refs.scroll !== undefined){
        refresh()
      }
    }
    this.$bus.$on('goodsItemImgLoad', this.itemImgListener)
  }
}


export const backTopMixin ={
  components:{
    BackTop
  },
  data() {
    return{
      isShowBackTop:false,
    }
  },
  methods:{
    // 返回顶部方法
    backClick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    listenerBackTop(position){

    }
  }
}

