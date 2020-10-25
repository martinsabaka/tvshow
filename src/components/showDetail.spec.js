import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ShowDetail from './ShowDetail.vue'
import BootstrapVue from "bootstrap-vue"
import router from "../router";

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('Mounted App', () => {
  const wrapper = mount(ShowDetail, {
    localVue,
    router
  });

  test('should be a Vue instance', () => {
    expect(wrapper).toBeTruthy();
  })
})