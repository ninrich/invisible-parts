<template>
<div class="backdrop" v-show="popupOpen">
  <div class="content" v-if="currentPlace">
    <div class="close-button" @click="closePopup">Zavrieť</div>
    <h1 v-if="currentPlace.name">{{ currentPlace.name }}</h1>
    <h2 v-if="currentPlace.author">{{ currentPlace.author }}</h2>
    <h3 v-if="currentPlace.year">{{ currentPlace.year }}</h3>
    <p v-if="currentPlace.context">{{ currentPlace.context }}</p>
  </div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "IPPopup",
  watch: {
    popupOpen(newValue) {
      if (newValue === true) {
        window.addEventListener("keydown", this.escKeyListener);
      } else {
        window.removeEventListener("keydown", this.escKeyListener);
      }
    }
  },
  methods: {
    escKeyListener(event) {
      if (event.key === "Escape") {
        this.closePopup();
      }
    },
    ...mapMutations([
        'closePopup'
    ])
  },
  computed: {
    ...mapState([
        'popupOpen',
        'currentPlace'
    ])
  }
}
</script>

<style scoped>
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10000;
  backdrop-filter: blur(1.5rem);
  background-color: rgba(127,127,127,0.5)
}

.close-button {
  width: 100%;
  text-align: center;
  font-size: 3em;
  cursor: pointer;
}

.content {
  background-color: white;
  width: 500px;
  margin: auto;
}
</style>