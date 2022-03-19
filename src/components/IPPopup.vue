<template>
<div class="backdrop" v-if="place">
  <div class="content">

    <div class="header">
      <div class="col-66 header-left">
        <img class="logo" src="../assets/logo.png" alt="logo invisible parts"/>
        <span class="place-id">{{ place.id }}</span>
      </div>
      <div class="col-34">
        <button class="close-button" @click="closePopup">X</button>
      </div>
    </div>

    <div class="col-66 photos">

    </div>
    <div class="col-34 information">
      <div>
        <span class="attribute">Názov diela: </span><span v-if="place.name" class="value">{{ place.name }}</span>
      </div>
      <div>
        <span class="attribute">Typ diela: </span><span v-if="place.type" class="value">{{ place.type }}</span>
      </div>
      <div>
        <span class="attribute">Meno autora: </span><span v-if="place.author" class="value">{{ place.author }}</span>
      </div>
      <div>
        <span class="attribute">Rok realizácie: </span><span v-if="place.year" class="value">{{ place.year }}</span>
      </div>
      <div>
        <span class="attribute">Aktuálny stav: </span><span v-if="place.condition" class="value">{{ place.condition }}</span>
      </div>
      <div>
        <span class="attribute">Lokalita: </span><span v-if="place.location" class="value">{{ place.location }}</span>
      </div>
      <div>
        <span class="attribute">Prístupnosť: </span><span v-if="place.accessibility" class="value">{{ place.accessibility }}</span>
      </div>
      <br>
      <span class="attribute">Informácie o diele: </span>
      <div>
        <span class="attribute">Materiál: </span><span v-if="place.material" class="value">{{ place.material }}</span>
      </div>
      <div>
        <span class="attribute">Technika: </span><span v-if="place.technique" class="value">{{ place.technique }}</span>
      </div>
      <div>
        <span class="attribute">Popis diela:</span><br>
        <span v-if="place.information" class="value">{{ place.information }}</span>
      </div>
    </div>
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
    closePopup() {
      router.push({name: 'Home'});
    },

    escKeyListener(event) {
      if (event.key === "Escape") {
        this.closePopup();
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
  text-align: center;
  cursor: pointer;
  float: right;
  border: 0;
  background-color: transparent;
  color: var(--primary-color);
  font-weight: bolder;
  font-size: 2em;
}

.header {
}

.header-left {
  height: 4em;

  position: relative;
}

.content {
  background-color: white;
  width: 960px;
  height: 100vh;
  overflow-y: auto;
  margin: auto;
}

.col-66 {
  width: 66%;
  display: inline-block;
}

.col-34 {
  width: 34%;
  display: inline-block;
}

.logo {
  position: absolute;
  left: 0;
  bottom: 0;
}

.place-id {
  position: absolute;
  bottom: 0;
  right: 0;
  color: var(--primary-color);
  font-weight: bolder;
}

.photos {
}

.information {
  text-align: left;
}

.attribute {
  color: var(--primary-color);
  font-weight: bolder;
}

.value {
  color: var(--primary-color)
}

@media screen and (max-width: 960px) {
  .content {
    width: 100%;
  }
}
</style>