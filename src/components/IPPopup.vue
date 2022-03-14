<template>
<div class="backdrop" v-show="popupOpen">
  <div class="content" v-if="currentPlace">
    <h1 v-if="currentPlace.name">{{ currentPlace.name }}</h1>
    <h2 v-if="currentPlace.author">Autor: {{ currentPlace.author }}</h2>
    <h3 v-if="currentPlace.year">Rok: {{ currentPlace.year }}</h3>
    <h3 v-if="currentPlace.address">Adresa: {{ currentPlace.address }}</h3>
    <h3 v-if="currentPlace.type">Typ diela: {{ currentPlace.type }}</h3>
    <h3 v-if="currentPlace.condition">Stav: {{ currentPlace.condition }}</h3>
    <h3 v-if="currentPlace.accessibility">Prístupnosť: {{ currentPlace.accessibility }}</h3>

    <p v-if="currentPlace.information">{{ currentPlace.information }}</p>
    <div class="close-button" @click="closePopup">Zavrieť</div>
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
        document.title = this.currentPlace.name + " | Invisible Parts";
        window.addEventListener("keydown", this.escKeyListener);
      } else {
        document.title = "Invisible Parts";
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
  width: 960px;
  height: 100vh;
  overflow-y: auto;
  margin: auto;
}

@media screen and (max-width: 960px) {
  .content {
    width: 100%;
  }
}
</style>