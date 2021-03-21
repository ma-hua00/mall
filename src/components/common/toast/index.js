import Toast from "components/common/toast/Toast";
const obj = {}

obj.install = (Vue) => {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  //2.用new的方式,根据组件构造器，可以构建出来一个组件
  const toast = new toastContrustor()
  //2.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //3.toast$el对应的就是div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default obj
