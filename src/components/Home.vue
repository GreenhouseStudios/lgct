<template>
  <div class="section">
    <Nav></Nav>
    <img
      :src="require('/src/assets/lgct-logo.png')"
      id="hero"
      class="w-50-ns w-70 ma6-ns mv7"
    />
  </div>
</template>

<script>
import Nav from "./Nav";
import { gsap } from "gsap";
export default {
  components: {
    Nav,
  },
  mounted() {
    gsap.from(".section", { opacity: 0, duration: 3, ease: "power2.out" });
    gsap.from("nav", { x: 500, duration: 1, ease: "power2.out" });
  },
};
</script>

<style lang="scss" scoped>
</style>