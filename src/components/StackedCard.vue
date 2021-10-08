<template>
  <div class="z-1 w-75-l h-90-l mb3 ph3">
    <div
      class="br4 ph5-l ph4-m ph3 pv2 shadow-4 db-l"
      id="main-card"
      :class="mainColor"
    >
      <div
        class="
          white
          w-40-l
          pa4-l
          pa2
          ma3
          mt3-ns
          mv1
          mb0-l
          br4
          fl-ns
          shadow-4
          relative-ns
        "
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f4 mr0-ns mv3-ns">
          <slot name="heading"></slot>
        </h1>
      </div>
      <div class="tl lh-title">
        <p class="f4-l f4-m f6">
          <slot></slot>
        </p>
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
@media (min-width: 1000px) {
  #title-card {
    position: relative;
    left: -20%;
    shape-outside: polygon(0% 0, 55% 0%, 55% 100%, 0% 100%);
    shape-margin: 1rem;
  }
  p{
    font-size: 1.75vw;
  }
  h1{
    font-size: 2vw;
  }
}
@media (max-width: 479px) {
  #title-card {
    margin-left: -10%;
    margin-right: -10%;
  }
  #main-card {
  }
}

// @media (min-width: 2000px) {
//   h1{
//     font-size: 3em;
//   }
//   p{
//     font-size: 3em;
//   }
// }
</style>