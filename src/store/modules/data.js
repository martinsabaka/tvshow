import axios from "axios";

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
   * Fetches all TV shows
   */
  async fetchAllShows({ commit }) {
    const response = await axios.get("http://api.tvmaze.com/shows");

    commit("setShows", response.data);
  },

  /**
   * Fetches show detail
   */
  async fetchShowDetails({ commit }, id) {
    const response = await axios.get("http://api.tvmaze.com/shows/" + id);
    commit("setShowDetail", response.data);
  },

  /**
   * Toggles Loading Spinner
   */
  toggleSpinner({ commit }, isLoading) {
    commit("toggleSpinner", isLoading);
  }
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
