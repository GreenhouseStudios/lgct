<template>
  <div class="z-1">
    <div class="br4 w-75 pv4 ph5 shadow-4 dn db-l" id="main-card" :class="mainColor">
      <div
        class="white w-50 pa2 br4 fl ph5 shadow-4"
        id="title-card"
        :class="headColor"
        style="position: relative; right: 10%"
      >
        <h1 class="serif f-subheadline-sn f2 mb0 mr0">
          <slot name="heading"></slot>
        </h1>
        <p class="f3-ns f6">{{ ipsum.generateSentences(1) }}</p>
      </div>
      <slot></slot>
      <!-- <div class="tl pa2">
        <h2>Heading Sample</h2>
        <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
      </div>
      <div class="tl pa2">
        <h2>Heading Sample</h2>
        <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
      </div>
      <div class="tl pa2">
        <h2>Heading Sample</h2>
        <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
      </div>
      <div class="tl pa2">
        <h2>Heading Sample</h2>
        <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
      </div> -->
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
</style>