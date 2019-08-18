import api from "../services/api";

const MovieService = {
  getUpcomingMovies: async function(page) {
    const response = await api.get(`/movies/upcoming/${page}`);
    return response.data.results;
  },
  searchMovies: async function(page, searchText) {
    const response = await api.get(`/movies/search/${page}/${searchText}`);
    return response.data.results;
  }
};

export default MovieService;
