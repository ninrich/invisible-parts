<template>
  <IPPopup/>
  <div class="home">
    <div class="ip-map-container">
      <IPMap/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPMap from "../components/IPMap";
import IPPopup from "@/components/IPPopup";

export default {
  name: 'Home',
  components: {
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