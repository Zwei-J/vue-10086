// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'

Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(wcSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
