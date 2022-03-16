<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
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
import IPFilter from "@/components/IPFilter";
// import {mapMutations} from "vuex";

export default {
  name: 'Home',
  components: {
    IPFilter,
    IPMap,
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.ip-map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>