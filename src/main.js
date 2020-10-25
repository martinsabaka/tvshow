import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import store from "./store/index.js";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import axios from "axios";

axios.interceptors.request.use(request => {
  store.dispatch("toggleSpinner", true);
  return request;
});

axios.interceptors.response.use(
  response => {
    store.dispatch("toggleSpinner", false);
    return response;
  },
  error => {
    store.dispatch("toggleSpinner", false);
    router.push("/error");
    return Promise.reject(error);
  }
);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
