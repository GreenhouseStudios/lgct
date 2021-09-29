<template>
  <div class="section relative">
    <div class="flex justify-center items-center h-100">
    <img
      :src="require('/src/assets/lgct-logo.png')"
      id="hero"
      class="w-50-ns w-70 ma6-ns mv7"
    />
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
</style>