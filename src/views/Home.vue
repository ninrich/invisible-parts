<template>
  <IPPopup/>
  <div class="home">
    <div class="ip-map-container">
      <IPMap/>
    </div>
    <IPFilter/>
  </div>
</template>

<script>
// @ is an alias to /src
import IPMap from "../components/IPMap";
import IPPopup from "@/components/IPPopup";
import IPFilter from "@/components/IPFilter";
import {mapMutations} from "vuex";

export default {
  name: 'Home',
  components: {
    IPFilter,
    IPPopup,
    IPMap,
  },
  created() {
    const placeId = parseInt(this.$route.params.placeId);
    if (placeId) {
      this.setCurrentPlaceById({newPlaceId: placeId});
      this.openPopup();
    }
  },
  methods: {
    ...mapMutations([
        'setCurrentPlaceById',
        'openPopup'
    ])
  }
}
</script>

<style scoped>
.ip-map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>