import { createStore } from 'vuex'

export default createStore({
  state: {
    popupOpen: false,
    currentPlace: null
  },
  mutations: {
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
    }
  },
  actions: {
  },
  modules: {
  }
})
