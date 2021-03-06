import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import router from "./router";
import store from "./store/index.js";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(App, {
    localVue,
    router,
    store
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("Mounted App", () => {
  test("should be a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });
});
