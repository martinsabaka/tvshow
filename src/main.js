import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import store from "./store/index.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
