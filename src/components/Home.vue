<template>
  <div class="section relative">
    <Nav></Nav>
    <img
      :src="require('/src/assets/lgct-logo.png')"
      id="hero"
      class="w-50-ns w-70 ma6-ns mv7"
    />
    <!-- <div
      class="absolute bottom-0 right-0 w-100 bg-lgct-red"
      style="height: 10vh"
    >
      <div
        id="curved-corner-bottomright"
        class="fr relative"
        style="top: -100px"
      ></div>
    </div> -->
    <curved-border :color="'red'"></curved-border>
  </div>
</template>

<script>
import Nav from "./Nav";
import { gsap } from "gsap";
import CurvedBorder from "./CurvedBorder.vue"
export default {
  components: {
    Nav, CurvedBorder
  },
  mounted() {
    gsap.from("#hero", { opacity: 0, duration: 3, ease: "power2.out" });
    gsap.from("nav", { x: -500, duration: 1, ease: "power2.out" });
  },
};
</script>

<style lang="scss" scoped>
</style>