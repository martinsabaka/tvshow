import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '../src/App.vue'
import BootstrapVue from "bootstrap-vue"
import router from "../src/router";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('Mounted App', () => {
  const wrapper = mount(App, {
    localVue,
    router
  });

  it('is a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  })
})