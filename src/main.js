import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

import toast from 'components/common/toast'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
//事件总线
Vue.prototype.$bus = new Vue
//安装toast插件
Vue.use(toast)
//解决移动端300ms延迟的问题
fastClick.attach(document.body)
//实现图片懒加载
//会出现使用后点击tabcontrol后不会切换图片的bug
// Vue.use(vueLazyLoad,{
//   loading: require('./assets/img/common/placeholder.png')
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
