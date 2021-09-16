<template>
  <div class="z-1 ph5-l ph2">
    <div
      class="br4 pv4-ns pv2 ph5-ns pa2 shadow-4 db-l h-100"
      id="main-card"
      :class="mainColor"
    >
      <div
        class="white w-40-l pa4-l pa2 br4 fl-ns shadow-4 relative-ns"
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f1-l fw5 f3 mr0-ns mv3-ns tl">
          <h5 class="lgct-teal f4 sans-serif i fw4 ma0">
          <slot name="gps"></slot>
          </h5>
          <slot name="heading"></slot>
          <div class="f3 fw4 sans-serif lgct-teal">
            <slot name="subtitle"></slot>
          </div>
          <div class="f6 lgct-red i sans-serif">
            <slot name="plot"></slot>
          </div>
        </h1>
      </div>
      <div class="i f3 lh-title tl">
        <slot></slot>
      </div>
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
      default: "bg-dark-gray",
    },
    mainColor: {
      type: String,
      default: "bg-lgct-white",
    },
  },
};
</script>

<style lang="scss" scoped>
#title-card {
  left: -30%;
  shape-outside: polygon(0% 0, 55% 0%, 55% 100%, 0% 100%);
  shape-margin: 1rem;
}

</style>