import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Spinner from "./Spinner.vue";
import BootstrapVue from "bootstrap-vue";
import router from "../router";

const localVue = createLocalVue();
localVue.use(BootstrapVue);
localVue.use(VueRouter);

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Spinner, {
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
