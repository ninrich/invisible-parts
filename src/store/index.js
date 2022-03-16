import {createStore} from 'vuex'

export default createStore({
  state: {
    hoods: null,
    filteredHoods: null,
    authors: null,
    filteredAuthors: null,
    places: null,
  },
  mutations: {
    setPlaces(state, payload) {
      state.places = payload.newPlaces;
    },

    setAuthors(state, payload) {
      state.authors = payload.newAuthors;
      state.filteredAuthors = new Set(payload.newAuthors);
    },

    setHoods(state, payload) {
      state.hoods = payload.newHoods;
      state.filteredHoods = new Set(payload.newHoods);
    },

    setAllFilteredHoods(state) {
      state.filteredHoods = new Set(state.hoods);
    },

    unsetAllFilteredHoods(state) {
      state.filteredHoods.clear();
      // state.filteredHoods = new Set();
    },

    setFilteredHoods(state, payload) {
      state.filteredHoods = payload.newFilteredHoods;
    },

    setFilteredAuthors(state, payload) {
      state.filteredAuthors = payload.newFilteredAuthors;
    },

    setAllFilteredAuthors(state) {
      state.filteredAuthors = new Set(state.authors);
    },

    unsetAllFilteredAuthors(state) {
      state.filteredAuthors.clear();
      // state.filteredHoods = new Set();
    },


    setAllFilters(state) {
      state.filteredAuthors = new Set(state.authors);
      state.filteredHoods = new Set(state.hoods);
    },

    unsetAllFilters(state) {
      state.filteredAuthors.clear();
      state.filteredHoods.clear();
    },
  },
  actions: {
  },
  getters: {
    filteredPlaces(state) {
      return state.places.filter(place => {
        return state.filteredHoods.has(place.hood) && state.filteredAuthors.has(place.author);
      });
    },

    getPlaceById: (state) => (placeId) => {
      return state.places.find(place => place.id === placeId)
    }
  },
  modules: {
  }
})
