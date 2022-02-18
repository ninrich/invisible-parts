<template>
  <p>Mestské časti</p>
  <template v-for="(hood, index) in hoods" :key="index">
    <input type="checkbox" :id="hood" :value="hood" v-model="localHoods"/>
    <label :for="hood">{{hood}}</label>
  </template>
  <div>
    <button @click="setAllFilteredHoods">Všetky mestské časti</button>
    <button @click="unsetAllFilteredHoods">Žiadne mestské časti</button>
  </div>
  <p>Autori</p>
  <template v-for="(author, index) in authors" :key="index">
    <input type="checkbox" :id="author" :value="author" v-model="localAuthors"/>
    <label :for="author">{{author}}</label>
  </template>
  <div>
    <button @click="setAllFilteredAuthors">Všetci autori</button>
    <button @click="unsetAllFilteredAuthors">Žiadni autori</button>
  </div>
  <br><br>
  <div>
    <button @click="setAllFilters">Všetky diela</button>
    <button @click="unsetAllFilters">Žiadne diela</button>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "IPFilter",
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

</style>