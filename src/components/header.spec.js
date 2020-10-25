import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Header from "./Header.vue";
import BootstrapVue from "bootstrap-vue";
import router from "../router";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Header, {
    localVue,
    router
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
