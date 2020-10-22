import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import Bus from "./eventBus";
import axios from "axios";

axios.interceptors.request.use(request => {
  Bus.$emit("toggleSpinner", true);
  return request;
});

axios.interceptors.response.use(
  response => {
    Bus.$emit("toggleSpinner", false);
    return response;
  },
  error => {
    Bus.$emit("toggleSpinner", false);
    router.push("/error");
    return Promise.reject(error);
  }
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
