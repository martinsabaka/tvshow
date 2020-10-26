import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Header from "./Header.vue";
import BootstrapVue from "bootstrap-vue";
import router from "../router";
import axios from "axios";

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

  test("should redirect when API call is successfull", async () => {
    const mockedResponse = {
      data: {
        id: 10,
        name: "test show"
      }
    };

    const mockAxiosGet = jest.spyOn(axios, "get");
    const spy = jest.fn();
    wrapper.vm.$router.push = spy;

    mockAxiosGet.mockImplementation(async () => mockedResponse);
    await wrapper.vm.searchShow("test");

    expect(spy).toHaveBeenCalled();
  });
});
