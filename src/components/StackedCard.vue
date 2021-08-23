<template>
  <div class="z-1 ph5-l ph2">
    <div class="br4 pv4-ns pv2 ph5-ns pa2 shadow-4 db-l h-100" id="main-card" :class="mainColor">
      <div
        class="white w-40-l pa4-l pa2 br4 fl-ns shadow-4 relative-ns"
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f1-l f3 mr0-ns mv3-ns">
          <slot name="heading"></slot>
        </h1>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  data() {
    return {
      ipsum: ipsum,
    };
  },
  props: {
    headColor: {
      type: String,
      default: "bg-dark-gray"
    },
    mainColor: {
      type: String,
      default: "bg-lgct-white"
    }
  },
};
</script>

<style lang="scss" scoped>
#title-card{
  left: -20%;
  shape-outside: polygon(0% 0, 55% 0%, 55% 100%, 0% 100%);
  shape-margin: 1rem;
}
</style>