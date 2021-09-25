<template>
  <div class="section relative">
    <img
      :src="require('/src/assets/lgct-logo.png')"
      id="hero"
      class="w-50-ns w-70 ma6-ns mv7"
    />
    <h1 class=" f1">LandGrabCT.org will be available on October 11th, 2021</h1>
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
    font-family: Arial, Helvetica, sans-serif !important;
}
</style>