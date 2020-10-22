import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import PopularShowDetails from '../src/views/PopularShowDetails.vue'
import BootstrapVue from 'bootstrap-vue'
import router from '../src/router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('PopularShowDetails.vue', () => {
  const wrapper = mount(PopularShowDetails, {
    localVue,
    router
  });

  test('shoule be a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })
})