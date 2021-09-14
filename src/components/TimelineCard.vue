<template>
  <div
    @click="expandCard"
    :class="{ expanded: isExpanded, compact: !isExpanded }"
    class="card br4 serif pa5-ns pa1 w-70-ns w-90 ma4-ns mv5 relative shadow-4"
  >
    <div
      v-show="isExpanded"
      class="
        fl-ns
        w-50-ns w-100
        relative
        br4
        pv3
        pl4-ns
        pr5-ns
        tl-ns
        f3
        shadow-4
      "
      id="black-header-card"
    >
      <h2 class="normal sans-serif i f2-ns f4">{{ date }}</h2>
      <h1 class="f1-ns f3">{{ heading }}</h1>
    </div>
    <span v-show="!isExpanded" class="tl" id="pre-click-header">
      <h2 class="f3-ns f5 normal sans-serif i">{{ date }}</h2>
      <h1 class="f1-ns f3">{{ heading }}</h1>
    </span>
    <div v-show="isExpanded" id="expanded-card-body">
      <span
        class="absolute bottom-0 right-0 hover-bg-light-blue w3 h3"
        v-on:click.stop="showMore = true"
        v-if="fullBody"
        v-show="!showMore"
        ><div class="relative f1">
          <span><i class="fa fa-chevron-down"></i></span></div
      ></span>
      <span
        class="absolute bottom-0 right-0 hover-bg-light-blue w3 h3"
        v-on:click.stop="showMore = false"
        v-if="fullBody"
        v-show="showMore"
        ><div class="relative f1">
          <span><i class="fa fa-chevron-up"></i></span></div
      ></span>
      <div class="ma2">
        <p class="tl" v-html="blocksToHTML({ blocks: body })"></p>
        <p
          v-if="fullBody"
          v-show="showMore"
          class="tl"
          v-html="blocksToHTML({ blocks: fullBody })"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    fullBody: {
      type: Array,
      default: null,
    },
    color: {
      type: String,
      default: "#F00",
    },
    img: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  data() {
    return {
      id: "",
      ipsum: ipsum,
      isExpanded: false,
      builder: imageUrlBuilder(client),
      blocksToHTML: require("@sanity/block-content-to-html"),
      showMore: false,
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
      if (event.stopPropagation) event.stopPropagation();
      this.isExpanded = true;
    },
    collapseCard() {
      event.cancelBubble = true;
      if (event.stopPropagation) event.stopPropagation();
      this.isExpanded = false;
    },
  },
  // mounted() {
  //   this.id = "card" + this.index;
  // },
};
</script>

<style lang="scss" scoped>
div.compact {
  background: #fefcf5;
  transition: 0.4s;
}
div.compact:hover {
  background: #333;
  color: white;
}
div.expanded {
  background-color: white;
}
@media screen and (min-width: 600px) {
  #black-header-card {
    left: -20%;
    shape-outside: polygon(0% 0, 60% 0%, 60% 100%, 0% 100%);
    shape-margin: 1rem;
  }
}
@media screen and (max-width: 600px) {
  #black-header-card {
    position: relative;
    left: 0;
    right: 0;
  }
}
#black-header-card {
  background-color: #333;
  color: white;
}
</style>