<template>
  <LMap
      ref="IPMap"
      id="ip-map"

      @ready="fitPlacesToBounds"

      :options="mapOptions"
  >
    <LControlZoom position="bottomleft"/>
    <LMarker
        v-for="place in filteredPlaces"
        :key="place.id"
        :lat-lng="[place.x, place.y]"
        @click="onMarkerClick(place)"
    >
      <LTooltip>
        {{place.name}}
      </LTooltip>
    </LMarker>
    <LTileLayer
        :url="'https://api.mapbox.com/styles/v1/monboxsk/cl04ee4di003k14ljrxntr1u1/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapboxToken"
    />
  </LMap>
</template>

<script>
import {LMap, LMarker, LTileLayer, LControlZoom, LTooltip} from "@vue-leaflet/vue-leaflet";
import { MAPBOX_ACCESS_TOKEN } from "@/api-keys";
import "leaflet/dist/leaflet.css";
import {mapGetters, mapMutations} from "vuex";
import router from "@/router";

export default {
  name: "IPMap",
  components: {
    LMap,
    LMarker,
    LTooltip,
    LTileLayer,
    LControlZoom
  },

  data() {
    return {
      mapboxToken: MAPBOX_ACCESS_TOKEN,
      mapOptions: {
        attributionControl: false,
        zoomControl: false,
        // zoomSnap 0.1 shows undesired gridlines on desktop
        // zoomSnap: f7.device.desktop ? 1 : 0.1
      },
    }
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
      router.push({name:"Detail", params: {placeId: place.id}})
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