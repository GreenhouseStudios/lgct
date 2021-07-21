<template>
  <div
    @click="expandCard"
    :class="{ expanded: isExpanded }"
    class="bg-light-gray serif pl5-ns ph4 w-70-ns w-100 pt3 pb4 ma4-ns relative "
  >
    <span class="tl">
      <h2>{{ date }}</h2>
      <h1>{{ heading }}</h1>
    </span>
    <div v-show="isExpanded" >
      <span
        class="absolute top-0 right-0 hover-bg-light-blue bg-moon-gray w3 h3"
        v-on:click.stop="collapseCard"
        ><div class="relative f1">
          <span>&#10005;</span>
        </div></span
      >
      <div class="flex flex-row-ns flex-column items-start">
        <div class="w-50-ns order-2 order-0-ns">
          <!-- <p v-for="(child, index) in blockChildren" :key="index" class="mt0">
            {{ child[0].text }}
          </p> -->
          <p v-html="blocksToHTML({ blocks: body })"></p>

          <button
            @click.stop.prevent="$emit('open-modal')"
            class="
              sans-serif
              blue
              f5
              bn
              grow
              hover-bg-light-blue
              bg-moon-gray
              pa2
              no-underline
              underline-hover
            "
          >
            Read More
          </button>
        </div>
        <img
          class="mw5 mh4-ns mb3 order-1"
          :src="url"
          alt="placeholder image"
        />
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";

export default {
  name: "TimelineCard",
  components: {},
  props: {
    date: {
      type: String,
      default: "1492",
    },
    heading: {
      type: String,
      default: "Card Heading Here",
    },
    body: {
      type: Array,
      default: () => ["Hello"],
    },
    color: {
      type: String,
      default: "#F00",
    },
    img: {
      type: Object,
    },
  },
  data() {
    return {
      ipsum: ipsum,
      isExpanded: false,
      builder: imageUrlBuilder(client),
      blocksToHTML: require("@sanity/block-content-to-html"),
    };
  },
  computed: {
    url() {
      return this.img
        ? this.builder.image(this.img)
        : "https://via.placeholder.com/150";
    },
    blockChildren() {
      return this.body.map((x) => x.children).filter((x) => x.text !== "\n");
    },
  },
  methods: {
    expandCard() {
      event.cancelBubble = true;
if(event.stopPropagation) event.stopPropagation();
      this.isExpanded = true;
    },
    collapseCard() {
      event.cancelBubble = true;
if(event.stopPropagation) event.stopPropagation();
      this.isExpanded = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.expanded {
  overflow-y: hidden;
}
</style>