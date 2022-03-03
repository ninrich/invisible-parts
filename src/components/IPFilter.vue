<template>
  <div class="filter-button" v-show="!filterExpanded" @click="openFilter">
  </div>

  <div class="filter-expanded" v-show="filterExpanded">
    <div class="filter-close-button" @click="closeFilter">
      Zavrieť
    </div>
    <div class="filter-content">
      <h2>Mestské časti</h2>
      <template v-for="(hood, index) in hoods" :key="index">
        <div>
          <label :for="hood">{{hood}}</label>
          <input type="checkbox" :id="hood" :value="hood" v-model="localHoods"/>
        </div>
      </template>
      <div>
        <button @click="setAllFilteredHoods">Všetky mestské časti</button>
        <button @click="unsetAllFilteredHoods">Žiadne mestské časti</button>
      </div>
      <h2>Autori</h2>
      <template v-for="(author, index) in authors" :key="index">
        <div>
          <label :for="author">{{author}}</label>
          <input type="checkbox" :id="author" :value="author" v-model="localAuthors"/>
        </div>
      </template>
      <div>
        <button @click="setAllFilteredAuthors">Všetci autori</button>
        <button @click="unsetAllFilteredAuthors">Žiadni autori</button>
      </div>
    <!-- TODO <div id="slider" ref="slider"></div>-->
      <br><br>
      <div>
        <button @click="setAllFilters">Všetky diela</button>
        <button @click="unsetAllFilters">Žiadne diela</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";
// TODO
// import noUiSlider from "nouislider";
// import 'nouislider/dist/nouislider.css';

export default {
  name: "IPFilter",
  data() {
    return {
      filterExpanded: false
    }
  },
  mounted() {
    // TODO
    // noUiSlider.create(this.$refs.slider, {
    //   start: [20, 80],
    //   connect: true,
    //   range: {
    //     'min': 0,
    //     'max': 100
    //   }
    // });
  },
  computed: {
    localHoods: {
      get() {
        return this.filteredHoods;
      },
      set(newValue) {
        this.setFilteredHoods({newFilteredHoods: newValue});
      }
    },

    localAuthors: {
      get() {
        return this.filteredAuthors;
      },
      set(newValue) {
        console.log(newValue);
        this.setFilteredAuthors({newFilteredAuthors: newValue});
      }
    },

    ...mapState([
        'authors',
        'filteredAuthors',
        'hoods',
        'filteredHoods'
    ])
  },
  methods: {
    openFilter() {
      this.filterExpanded = true;
    },
    closeFilter() {
      this.filterExpanded = false;
    },
    ...mapMutations([
        'setFilteredHoods',
        'setAllFilteredHoods',
        'unsetAllFilteredHoods',
        'setAllFilteredAuthors',
        'unsetAllFilteredAuthors',
        'setFilteredAuthors',
        'setAllFilters',
        'unsetAllFilters'
    ])
  }
}
</script>

<style scoped>
.filter-button {
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 32px;
  width: 32px;
  background-color: #2c84cb;

  z-index: 50000;
}

.filter-expanded {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  z-index: 50000;
  text-align: right;
  color: white;
  background-color: rgba(0, 0, 0, 0.50);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.filter-close-button {
  padding: 1em;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.25);
  color: white;
  /*transform: rotate(90deg);*/
}

.filter-content {
  overflow: auto;
  height: 100%;
  padding-right: 30px;
}

@media screen and (max-width: 960px) {
  .filter-expanded {
    width: 100vw;
  }
}

button {
  background-color: #2c3e50;
  color: white;
  border: none;
  padding: 10px;
  margin: 10px;
}
</style>