import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
Vue.use(VueRouter) //使用插件

export default new VueRouter({
  mode: 'history',
  routes: router,
})
