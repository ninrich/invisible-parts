<template>
<div class="backdrop" v-if="place">
  <div class="content">
    <h1 v-if="place.name">{{ place.name }}</h1>
    <h2 v-if="place.author">Autor: {{ place.author }}</h2>
    <h3 v-if="place.year">Rok: {{ place.year }}</h3>
    <h3 v-if="place.address">Adresa: {{ place.address }}</h3>
    <h3 v-if="place.type">Typ diela: {{ place.type }}</h3>
    <h3 v-if="place.condition">Stav: {{ place.condition }}</h3>
    <h3 v-if="place.accessibility">Prístupnosť: {{ place.accessibility }}</h3>

    <p v-if="place.information">{{ place.information }}</p>
    <div class="close-button" @click="closeDetail">Zavrieť</div>
  </div>
</div>
</template>

<script>
import router from "@/router";

export default {
  name: "IPPopup",
  props: ['place'],

  mounted() {
    window.addEventListener("keydown", this.escKeyListener);
  },

  unmounted() {
    window.removeEventListener("keydown", this.escKeyListener);
  },

  methods: {
    closeDetail() {
      router.push({name: 'Home'});
    },

    escKeyListener(event) {
      if (event.key === "Escape") {
        this.closeDetail();
      }
    },
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