<template>
  <div class="section relative">
    <div class="flex flex-column justify-center items-center h-100"> 
    <img
      :src="require('/src/assets/lgct-logo.png')"
      id="hero"
      class="w-40-l w-70"
    />
    <h1 class="tc pv4 f1-l f3">Launches at 12pm ET</h1>
    </div>
    <curved-border :color="'red'"></curved-border>
  </div>
</template>

<script>
// import Nav from "./Nav";
import { gsap } from "gsap";
import CurvedBorder from "./CurvedBorder.vue"
export default {
  components: {
    // Nav,
    CurvedBorder
  },
  mounted() {
    gsap.from("#hero", { opacity: 0, duration: 3, ease: "power2.out" });
    gsap.from("nav", { x: -500, duration: 1, ease: "power2.out" });
  },
};
</script>

<style lang="scss" scoped>
h1{
    font-family: Helvetica, sans-serif !important;
}
.section{
  height: 100vh;
}
</style>