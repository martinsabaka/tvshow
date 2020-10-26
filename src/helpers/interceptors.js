import axios from "axios";
import store from "../store/index.js";
import router from "../router";

export default function execute() {
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
}
