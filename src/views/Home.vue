<template>
  <div class="home">
    <div class="ip-map-container">
      <IPMap/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import IPMap from "../components/IPMap";

export default {
  name: 'Home',
  components: {
    IPMap,
  }
}
</script>

<style scoped>
.ip-map-container {
  width: 1000px;
  height: 500px;
  margin: auto;
}
</style>