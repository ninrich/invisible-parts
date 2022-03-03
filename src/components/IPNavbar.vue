<template>
  <div id="nav">
    <router-link to="/">Mapa</router-link> |
    <router-link to="/about">O Projekte</router-link> |
    <!-- TODO   <router-link to="/support">Podpora</router-link> |-->
    <!--    <a href="https://www.kalhotkomat.cz" target="_blank">E-shop</a> |-->
    <!--    <router-link to="/journal">Žurnál</router-link> |-->
    <router-link to="/contact">Kontakt</router-link>
  </div>
</template>

<script>
export default {
  name: "IPNavbar"
}
</script>

<style scoped>

#nav {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1000;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #2c84cb;
}
</style>