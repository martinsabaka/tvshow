import axios from "axios";

/**
 * Fetches all TV shows
 */
export async function fetchAllShows({ commit }) {
  const response = await axios.get("http://api.tvmaze.com/shows");

  commit("setShows", response.data);
}

/**
 * Fetches show details
 */
export async function fetchShowDetails({ commit }, id) {
  const response = await axios.get("http://api.tvmaze.com/shows/" + id);
  commit("setShowDetail", response.data);
}

/**
 * Searches show based on shows name
 */
export async function searchShow(input) {
  const response = await axios.get(
    "http://api.tvmaze.com/singlesearch/shows?q=" + input
  );
  this.$router.push("/detail/" + response.data.id);
}
