import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Spinner from './Spinner.vue'
import BootstrapVue from "bootstrap-vue"
import router from "../router";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('Mounted App', () => {
  const wrapper = mount(Spinner, {
    localVue,
    router
  });

  test('should be a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  })
})