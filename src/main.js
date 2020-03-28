import Vue from 'vue'
import App from './App.vue'
import vueRouter from "vue-router";
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
// Vue.config.productionTip = false

Vue.use(vueRouter);

const router = new vueRouter({
  mode : "history",
  routes : [
    {path : "/about" , component:AboutUs},
    {path : "/contact" , component:ContactUs},

  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
