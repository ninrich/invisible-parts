<template>
  <LMap
      ref="IPMap"
      id="ip-map"
      @ready="fitPlacesToBounds"
  >
    <LMarker
        v-for="place in places"
        :key="place.id"
        :lat-lng="[place.x, place.y]"
    >
      <LPopup>{{place}}</LPopup>
    </LMarker>
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </LMap>
</template>

<script>
import { LMap, LPopup, LMarker, LTileLayer } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/data.json";

export default {
  name: "IPMap",
  components: {
    LMap,
    LPopup,
    LMarker,
    LTileLayer
  },
  setup() {
    const places = data;

    return {
      places
    }
  },
  methods: {
    fitPlacesToBounds() {
      let allCoordinates = []
      for (const place of this.places) {
        allCoordinates.push([place.x, place.y])
      }
      console.log(allCoordinates)
      this.$refs.IPMap.leafletObject.fitBounds(allCoordinates);
    }
  }
}
</script>

<style scoped>
#ip-map {
  height: 100%;
  width: 100%;
}
</style>