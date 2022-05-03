<template>
  <div class="z-1 ph4 mb6 mw9 ma5-l ma3">
    <div
      class="br4 pv4-ns pv1 ph3-ns ph3 pa2 shadow-4 flex-ns flex-row-l flex-column justify-between"
      id="main-card"
      :class="mainColor"
    >
      <div
        class="white mw6-l ph4-ns br4 shadow-4"
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f1-l fw5 f3 mr0-ns mb3-ns tl pv2">
          <h5 class="lgct-teal f3-l f5 sans-serif i fw4 ma0 pv3-ns pv1">
            <slot name="gps"></slot>
          </h5>
          <div class="f2-l f4"><slot name="heading"></slot></div>
          <div class="f4-l f6 fw4 sans-serif lgct-teal pv3-ns pv1">
            <slot name="subtitle"></slot>
          </div>
          <div class="f4-l f6 lgct-red i sans-serif">
            <slot name="plot"></slot>
          </div>
        </h1>
      </div>
      <div class="f3-l f4-m f5 lh-title tl ma3-l ma1 w-75-ns">
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
  p {
    font-size: 1.5vw;
  }
  h1 {
    font-size: 1.75vw;
  }
  #title-card{
    margin-left: -5%;
  }
}
@media screen and (max-width:60em) {
  #title-card {
    margin-left: -5%;
    margin-right: -5%;
    padding: 0 10% ;
  }
}
@media screen and (max-width:30em) {
  #title-card {
    margin-left: -15%;
    margin-right: -15%;
    padding: 0 10% ;
  }
}
</style>