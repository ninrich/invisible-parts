import { createStore } from 'vuex'

export default createStore({
  state: {
    popupOpen: true,
    hoods: null,
    filteredHoods: null,
    authors: null,
    filteredAuthors: null,
    places: null,
    currentPlace: null
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

    openPopup(state) {
      state.popupOpen = true;
    },

    closePopup(state) {
      state.popupOpen = false;
    },

    setCurrentPlace(state, payload) {
      state.currentPlace = payload.newCurrentPlace;
    },

    unsetCurrentPlace(state) {
      state.currentPlace = null;
    },

    setCurrentPlaceById(state, payload) {
      const place = state.places.find(place => place.id === payload.newPlaceId)
      if (!place) {
        alert("not found")
        return false;
      }
      state.currentPlace = place;
      console.log(place)
    }
  },
  actions: {
  },
  getters: {
    filteredPlaces(state) {
      const filteredPlaces = state.places.filter( place => {
        return state.filteredHoods.has(place.hood) && state.filteredAuthors.has(place.author);
      });
      console.log(filteredPlaces);
      return filteredPlaces;
    }
  },
  modules: {
  }
})
