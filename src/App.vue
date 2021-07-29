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

<style>
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
  color: #70B9B2,
}
.lgct-gold{
  color: #EFC55B,
}
.lgct-grey{

}
</style>
