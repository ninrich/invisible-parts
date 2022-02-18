<template>
  <LMap
      ref="IPMap"
      id="ip-map"
      @ready="fitPlacesToBounds"
  >
    <LMarker
        v-for="place in filteredPlaces"
        :key="place.id"
        :lat-lng="[place.x, place.y]"
        @click="onMarkerClick(place)"
    />
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </LMap>
</template>

<script>
import { LMap, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "IPMap",
  components: {
    LMap,
    LMarker,
    LTileLayer
  },

  watch: {
    filteredPlaces(newValue) {
      // This if statement  is necessary because fitBounds borks if there is only one [lat, lng] pair.
      if (newValue.length === 1)
        this.flyToPlace(newValue[0])
      else if (newValue.length > 1)
        this.fitPlacesToBounds();
    }
  },

  methods: {
    flyToPlace(place) {
      this.$refs.IPMap.leafletObject.flyTo([place.x, place.y], 14);
    },

    fitPlacesToBounds() {
      let allCoordinates = []
      for (const place of this.filteredPlaces) {
        allCoordinates.push([place.x, place.y])
      }
      if (allCoordinates.length > 0)
        this.$refs.IPMap.leafletObject.fitBounds(allCoordinates, {animate: true, duration: 1});
    },

    onMarkerClick(place) {
      this.setCurrentPlace({newCurrentPlace: place});
      this.openPopup();
    },

    ...mapMutations([
        'openPopup',
        'setCurrentPlace'
    ])
  },

  computed: {
    ...mapGetters([
        'filteredPlaces'
    ])
  }
}
</script>

<style scoped>
#ip-map {
  height: 100%;
  width: 100%;
}
</style>