<template>
  <div class="flex flex-column justify-center h-75 section">
    <div class="tl pa4 h-75 relative" :class="isFlipped">
      <h1 class="f1" v-if="!isTitle">{{ heading }}</h1>
      <h1 class="f-headline" v-else>{{ heading }}</h1>
      <p class="i fw8 lh-copy" v-if="!isTitle">{{ body }}</p>
      <router-link
        to="/timeline/National Timeline"
        class="absolute bottom--1"
        style="text-decoration: none; color: inherit"
        v-if="!isTitle"
      >
        <button class="bg-lgct-teal"><h1 class="white">Visit</h1></button>
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
    }
  },
  data() {
    return {
      body: ipsum.generateSentences(15),
      ipsum: ipsum,
    };
  },
  computed: {
    isFlipped() {
      return this.flip ? "container-flipped pr7 pl6" : "pl7 pr6 container";
    },
  },
};
</script>

<style lang="scss" scoped>
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
button {
  z-index: 3;
  position: relative;
  left: 45%;
  top: 6%;
  border-style: none;
  background: #70b9b2;
  width: 309px;
  height: 100px;
  border-radius: 16px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.6);
  transition: 0.4s;
}
button:hover {
  background-color: #4d9ba3;
}
</style>