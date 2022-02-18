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

export default {
  name: 'Home',
  components: {
    IPFilter,
    IPPopup,
    IPMap,
  }
}
</script>

<style scoped>
.ip-map-container {
  width: 100%;
  height: 500px;
  margin: auto;
}
</style>