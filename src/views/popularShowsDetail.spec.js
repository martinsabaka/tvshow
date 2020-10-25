import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import PopularShowDetails from "./PopularShowDetails.vue";
import BootstrapVue from "bootstrap-vue";
import router from "../router";
import store from "../store/index.js";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(PopularShowDetails, {
    localVue,
    router,
    store
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("PopularShowDetails.vue", () => {
  test("shoule be a Vue instance", () => {
    expect(wrapper).toBeTruthy();
  });
});
