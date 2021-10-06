<template>
  <div class="z-1 ph2 mb6 mw9 h-100">
    <div
      class="br4 pv4-ns pv2 ph3-l ph3 pa2 shadow-4 db-l"
      id="main-card"
      :class="mainColor"
    >
      <div
        class="white w-40-l pl4-l pa3 br4 fl-l shadow-4 relative-ns h-100"
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f1-l fw5 f3 mr0-ns mv3-l tl pv2">
          <h5 class="lgct-teal f4 sans-serif i fw4 ma0 pv3">
            <slot name="gps"></slot>
          </h5>
          <slot name="heading"></slot>
          <div class="f3 fw4 sans-serif lgct-teal pv3">
            <slot name="subtitle"></slot>
          </div>
          <div class="f6 lgct-red i sans-serif">
            <slot name="plot"></slot>
          </div>
        </h1>
      </div>
      <div class="f3-ns f5 lh-title tl">
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
@media screen and (min-width: 60em) {
  #title-card {
    left: -15em;
    shape-outside: polygon(0% 0, 50% 0%, 50% 100%, 0% 100%);
    shape-margin: 1rem;
  }
  p {
    font-size: 1.5vw;
  }
  h1 {
    font-size: 1.75vw;
  }
}
@media screen and (max-width: 60em) {
  #title-card {
    margin-left: -10%;
    margin-right: -10%;
  }
}
</style>