<template>
  <IPNavbar/>
  <router-view/>
</template>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Nunito, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>
import IPNavbar from "@/components/IPNavbar.vue";
export default {
  components: {IPNavbar}
}
</script>
