<template>
  <div id="app">
    <Nav></Nav>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
    </full-page>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#FEFCF5", "#000000", "#FEFCF5", "#AA4F37"],
        paddingTop: "0px",
        paddingBottom: "0px",
      },
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
</style>
