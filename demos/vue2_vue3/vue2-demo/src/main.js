import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import  Bus from  '../utils/event-bus'
Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueRouter)
Vue.use(ElementUI);
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

new Vue({
  router,
  data: { Bus },
  render: (h) => h(App),
}).$mount("#app");
