<template>
  <div id="app">
    <div v-if="$route.path !== '/'">
      <div class="fixed top-0 right-2 hot-pink z-2 f1 serif pa2 dn db-l">
        Large
      </div>
      <div class="fixed top-0 right-2 hot-pink z-2 f3 serif pa2 dn db-m">
        Medium
      </div>
      <div class="fixed top-0 right-2 hot-pink z-2 f5 serif pa2 dn-l dn-m db">
        Small
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#ind {
  background-image: url(../src/assets/indigenous-peoples.png);
}
.section {
  min-height: 100vh;
}
router-link {
  text-decoration: none;
}
$lgct-white: #fefcf5;
$lgct-red: #aa4f37;
$lgct-teal: #70b9b2;
.bg-lgct-white {
  background-color: $lgct-white;
}
.bg-lgct-red {
  background-color: #aa4f37;
}
.bg-lgct-blue {
  color: #82b8b3;
}
.bg-lgct-teal {
  background-color: #54bab1;
}
.bg-lgct-gold {
  background-color: #edc35b;
}
.bg-lgct-black {
  background-color: #000;
}
.lgct-black {
  color: #000;
}
.lgct-white {
  color: #fefcf5;
}
.lgct-red {
  color: #aa4f37;
}
.lgct-blue {
  color: #82b8b3;
}
.lgct-teal {
  color: #54bab1;
}
.lgct-gold {
  color: #edc35b;
}
:root {
  --box-shadow-color: #54bab1;
}
#curved-corner-bottomleft,
#curved-corner-bottomright,
#curved-corner-topleft,
#curved-corner-topright {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
}
#curved-corner-bottomleft:before,
#curved-corner-bottomright:before,
#curved-corner-topleft:before,
#curved-corner-topright:before {
  content: "";
  display: block;
  width: 200%;
  height: 200%;
  position: absolute;
  border-radius: 50%;
}
#curved-corner-bottomleft:before {
  bottom: 0;
  left: 0;
  box-shadow: -50px 50px 0 0;
}
#curved-corner-bottomright:before {
  bottom: 0;
  right: 0;
  box-shadow: 100px 100px 0 0;
}
#curved-corner-topleft:before {
  top: 0;
  left: 0;
  box-shadow: -50px -50px 0 0 red;
}
#curved-corner-topright:before {
  top: 0;
  right: 0;
  box-shadow: 50px -50px 0 0 red;
}
a {
  text-decoration: none;
  color: inherit;
  display: inherit;
}
h1 {
  font-family: "FrankRuhlLibre" !important;
}
p {
  font-family: "Karla" !important;
}
// @font-face {
//   font-family: "frank ruhl libre";
//   src: local("FrankRuhl"),
//    url(./fonts/FrankRuhlLibre-Regular.tff) format("truetype");
// }
</style>
