import interceptor from "../../helpers/interceptors";
import { fetchAllShows, fetchShowDetails } from "../../helpers/api";

interceptor();

const state = {
  isLoading: false,
  allShows: [],
  showDetail: {}
};

const getters = {
  isLoading: state => state.isLoading,
  allShows: state => state.allShows,
  showDetail: state => state.showDetail
};

const actions = {
  /**
   * Toggles Loading Spinner
   */
  toggleSpinner({ commit }, isLoading) {
    commit("toggleSpinner", isLoading);
  },
  fetchAllShows,
  fetchShowDetails
};

const mutations = {
  setShows: (state, shows) => (state.allShows = shows),
  setShowDetail: (state, show) => (state.showDetail = show),
  toggleSpinner: (state, isLoading) => (state.isLoading = isLoading)
};

export default {
  state,
  getters,
  actions,
  mutations
};
