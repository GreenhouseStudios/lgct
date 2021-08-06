<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
  data() {
    return {

    };
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
router-link{
    text-decoration: none;
}
$lgct-white: #FEFCF5;
$lgct-red: #AA4F37;
$lgct-teal: #70B9B2;
.bg-lgct-white{
  background-color: #FEFCF5,
}
.bg-lgct-red{
  background-color: #AA4F37,
}
.bg-lgct-blue{
  color: #82b8b3,
}
.bg-lgct-teal{
  background-color: #54BAB1,
}
.bg-lgct-gold{
  background-color: #EDC35B,
}
.lgct-white{
  color: #FEFCF5,
}
.lgct-red{
  color: #AA4F37,
}
.lgct-blue{
  color: #82b8b3,
}
.lgct-teal{
  color: #54BAB1,
}
.lgct-gold{
  color: #EDC35B,
}
:root{
  --box-shadow-color: #54BAB1;
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
  box-shadow: -50px 50px 0 0 red;
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
a{
  text-decoration: none;
  color: inherit;
  display: inherit;
}
</style>
