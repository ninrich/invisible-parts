<template>
<div class="backdrop" v-show="popupOpen">
  <div class="close-button" @click="closePopup">X</div>
  <div class="content" v-if="currentPlace">
    {{currentPlace}}
  </div>
</div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: "IPPopup",
  methods: {
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
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 3em;
  cursor: pointer;
}

.content {
  background-color: white;
  width: 500px;
  margin: auto;
  margin-top: 3em;
}
</style>