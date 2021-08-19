<template>
  <div class="z-1 ph5">
    <div class="br4 pv4 ph5 shadow-4 dn db-l h-100" id="main-card" :class="mainColor">
      <div
        class="white w-40 pa4 br4 fl shadow-4 relative"
        id="title-card"
        :class="headColor"
      >
        <h1 class="serif f1-ns f2 mr0 mv3">
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