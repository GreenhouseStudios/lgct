<template>
  <div class="h-100">
    <div
      class="tl pa4-l pa2 relative h-75"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      v-if="img !== ''"
      id="round-card"
    >
      <h1 class="f-headline-l f3" v-if="isTitle">{{ heading }}</h1>
      <h1 class="f1-l f3 mt5" v-else>{{ heading }}</h1>

      <p class="i fw5 f3-l f6-m f6 lh-copy" v-if="!isTitle">
        <slot></slot>
      </p>
    </div>
    <div
      v-else
      class="tl pa4-l pa2 relative h-75"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      id="round-card"
    >
      <h1 class="f-headline-l f3" v-if="isTitle">{{ heading }}</h1>
      <h1 class="f1-l f3 mt5" v-else>{{ heading }}</h1>

      <p class="i fw5 f3-l f6-m f6 lh-copy" v-if="!isTitle">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  props: {
    flip: {
      type: Boolean,
      default: false,
    },
 
    heading: {
      type: String,
      default: "National Timeline",
    },
    isTitle: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default:"#e0ddd5"
    }
  },
  data() {
    return {
      body: ipsum.generateSentences(10),
      ipsum: ipsum,
    };
  },
  computed: {
    isFlipped() {
      return this.flip
        ? "container-flipped pr7-l pl6-l "
        : "pl7-l pr6-l container ";
    },
    isFlippedHeading() {
      return this.flip ? "tr" : "tl";
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .container {
    width: 80%;
    position: relative;
    top: 13%;
    left: 0%;
    border-radius: 0 500px 500px 0;
    z-index: 1;
  }
  .container-flipped {
    width: 80%;
    right: 0%;
    top: 13%;
    border-radius: 500px 0 0 500px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
}
@media screen and (max-width: 600px) {
  .container {
    padding-right: 30%;
    border-radius: 0 300px 300px 0;
    z-index: 1;
    height: 90%;
  }
  .container-flipped {
    border-radius: 300px 0 0 300px;
    float: right;
    z-index: 1;
    padding-left: 30%;
    height: 90%;
  }
}
#round-card {
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
}
</style>