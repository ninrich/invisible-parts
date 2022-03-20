<template>
<div class="backdrop" v-if="place">
  <div class="content">
    <img class="close-button" @click="closePopup" src="../assets/icon-close.png" />

    <div class="header">
      <div class="col-66 header-left">
        <img class="logo" src="../assets/logo.png" alt="logo invisible parts"/>
        <span class="place-id">{{ place.id }}</span>
      </div>
      <div class="col33">
      </div>
    </div>

    <div class="col-66 photos">
        <splide class="splide-carousel" :options="splideOptions">
          <splide-slide>
            <img class="splide-image" src="../assets/2-3.png">
          </splide-slide>
          <splide-slide>
            <img class="splide-image" src="../assets/3-2.png">
          </splide-slide>
          <splide-slide>
            <img class="splide-image" src="../assets/1-1.png">
          </splide-slide>
        </splide>
      <button class="navigate-button">
        Navigovať
      </button>
    </div>
    <div class="col-33 information-container">
      <div class="information">
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
</div>
</template>

<script>
import router from "@/router";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


export default {
  name: "IPPopup",
  props: ['place'],
  components: {
    Splide,
    SplideSlide,
  },

  data() {
    return {
      splideOptions: {
        mouse: true,
        rewind: true,
        pagination: false,
        height: '100%',
        width: '100%'
      }
    }
  },

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
.splide-carousel {
  width: 600px;
  height: 600px;
}
.splide-image {
  height: 600px;
  width: 600px;
  object-fit: contain;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10000;
  background-color: rgba(127,127,127,0.5);
  overflow-y: auto;
}

.backdrop::-webkit-scrollbar {
  display: none;
}

.content {
  background-color: white;
  width: 900px;
  padding: 20px;
  overflow-y: scroll;
  margin: auto;

  /* https://stackoverflow.com/a/27532367/8678845 */
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.content::-webkit-scrollbar {
  display: none;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  z-index: 1000;
  cursor: pointer;

  border: 0;
  background-color: transparent;
  color: var(--primary-color);
}

.navigate-button {
  color: var(--primary-color);
  background-color: transparent;
  border: 2px solid red;
  border-radius: 0.5em;
  padding: 0.2em 0.5em;
  font-weight: bolder;
  margin-top: 15px;
  float: left;
}

.header {
  text-align: left;
}

.header-left {
  height: 4em;

  position: relative;
}



.col-66 {
  width: calc( (100% / 3) * 2);
  display: inline-block;
}

.col-33 {
  width: calc(100% / 3);
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

.information-container {
  vertical-align: top;
}

.information {
  text-align: left;
  margin-left: 20px;
}

.attribute {
  color: var(--primary-color);
  font-weight: bolder;
}

.value {
  color: var(--primary-color);
  font-weight: lighter;
}

@media screen and (max-width: 960px) {
  .backdrop {
    background-color: white;
  }

  .splide-carousel {
    height: 100vw;
    width: 100vw;
    max-width: 600px;
    max-height: 600px;
  }

  .splide-image {
    height: 100vw;
    width: 100vw;
    max-width: 600px;
    max-height: 600px;
  }

  .content {
    width: 100vw;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    transform: none;
    -webkit-transform: none;
    -moz-transform: none;
  }

  .close-button {
    right: 10px;
  }

  .header {
    padding-top: 20px;
  }

  .logo {
    padding-left: 10px;
  }

  .information {
    margin: 10px 10px 20px;
  }

  .place-id {
    padding-right: 10px;
  }

  .col-66, .col-33 {
    width: 100vw;
  }

  .navigate-button {
    margin-left: 10px;
  }
}
</style>