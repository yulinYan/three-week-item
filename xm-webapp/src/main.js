import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./router";
import VueX from 'vuex'
import store from "./store";
Vue.use(VueRouter)
Vue.use(VueX)
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
