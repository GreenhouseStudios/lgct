<template>
  <div class="flex flex-column justify-center section">
    <div class="tl pa4-l pa2 relative" :class="isFlipped" :style="{ backgroundImage: 'url(' + img + ')' }" id="round-card">
      <h1 class="f1-l f3 mt5" v-if="!isTitle">{{ heading }}</h1>
      <h1 class="f-headline-l f3"  v-else>{{ heading }}</h1>

      <p class="i fw5 f2-l f4-m f6 lh-copy" v-if="!isTitle">
        <slot></slot>
      </p>
      <router-link
        :to="'/timeline/' + buttonLink"
        class="absolute bottom--1"
        style="text-decoration: none; color: inherit"
        v-if="!isTitle"
      >
        <button class="bg-lgct-teal w5-l w4">
          <h1 class="white f1-l f3">Visit</h1>
        </button>
      </router-link>
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
    buttonLink: {
      type: String,
      default: "National Timeline",
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
      default: require("../assets/LG_usa-silhouette.png")
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
        : "pl7-l pr6-l container "
    },
    isFlippedHeading(){
      return this.flip ? "tr" : "tl";
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .container {
    background: #e0ddd5;
    width: 80%;
    position: relative;
    top: 13%;
    left: 0%;
    border-radius: 0 300px 300px 0;
    z-index: 1;
  }
  .container-flipped {
    background: #e0ddd5;
    width: 80%;
    right: 0%;
    top: 13%;
    border-radius: 300px 0 0 300px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
}
@media screen and (max-width: 600px) {
  .container {
    background: #e0ddd5;
    padding-right: 30%;
    border-radius: 0 300px 300px 0;
    z-index: 1;
    height: 90%;
  }
  .container-flipped {
    background: #e0ddd5;
    border-radius: 300px 0 0 300px;
    float: right;
    z-index: 1;
    padding-left: 30%;
    height: 90%;
  }
}
button {
  z-index: 3;
  position: relative;
  left: 45%;
  top: 6%;
  border-style: none;
  background: #70b9b2;
  border-radius: 16px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}
button:hover {
  background-color: #4d9ba3;
}
#round-card{
  background-repeat: no-repeat;
  background-size: 75%;
}
</style>