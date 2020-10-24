import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import PopularShows from '../src/views/PopularShows.vue'
import BootstrapVue from 'bootstrap-vue'
import router from '../src/router'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(VueRouter)

describe('PopularShows.vue', () => {
  const wrapper = mount(PopularShows, {
    localVue,
    router
  });
  
  const testShowsData = [
    { id: 1, rating: { average: 4.1 }, genres: ["Drama", "Science-Fiction", "Thriller"], premiered: '2013' },
    { id: 2, rating: { average: 6.0 }, genres: ["Drama"], premiered: '2013' },
    { id: 3, rating: { average: 5.4 }, genres: ["Drama", "Romance"], premiered: '2013' },
    { id: 4, rating: { average: 9.2 }, genres: ["Thriller"], premiered: '2013' },
    { id: 5, rating: { average: 7.6 }, genres: ["Thriller", "Romance"], premiered: '2013' },
  ];

  test('shoule be a Vue instance', () => {
    expect(wrapper).toBeTruthy()
  })

  test('shoule be a Vue instance', () => {
    wrapper.vm.setFilter('Drama');
    expect(wrapper.vm.filter).toEqual('Drama');
  })

  test('should sort the shows by rating', () => {
    const expectedResult = [
      { id: 4, rating: { average: 9.2 }, genres: ["Thriller"], premiered: '2013' },
      { id: 5, rating: { average: 7.6 }, genres: ["Thriller", "Romance"], premiered: '2013' },
      { id: 2, rating: { average: 6.0 }, genres: ["Drama"], premiered: '2013' },
      { id: 3, rating: { average: 5.4 }, genres: ["Drama", "Romance"], premiered: '2013' },
      { id: 1, rating: { average: 4.1 }, genres: ["Drama", "Science-Fiction", "Thriller"], premiered: '2013'  },
    ];

    expect(wrapper.vm.filterShowsRating(testShowsData)).toEqual(expectedResult);
  })

  test('should filter shows by genre', () => {
    wrapper.vm.shows = testShowsData;

    wrapper.vm.filter = "All"
    expect(wrapper.vm.filterShowsGenre(false)).toEqual(testShowsData);

    wrapper.vm.filter = "Drama"
    expect(wrapper.vm.filterShowsGenre(false).length).toEqual(3);

    wrapper.vm.filter = "Romance"
    expect(wrapper.vm.filterShowsGenre(false).length).toEqual(2);
    expect(wrapper.vm.filterShowsGenre(false)[0].genres.includes('Romance')).toBeTruthy;
    expect(wrapper.vm.filterShowsGenre(false)[1].genres.includes('Romance')).toBeTruthy;
  }) 
})