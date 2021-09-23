<template>
  <div
    @click="expandCard"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    class="flex justify-start items-start"
    
  >
  <div class="bg-lgct-white w3 h5 o-10 relative shadow-4" :class="{'card-bg': hover, 'card-exp': isExpanded}">
      <!-- <div class="w5 h5 br-100 bg-white absolute dn" :class="{'card-circle': hover}"></div> -->
  </div>
    <!-- <div
      v-show="isExpanded"
      class="
        fl-ns
        relative
        o-10
        pv3
        pl4-ns
        pr5-ns
        tl-ns
        f3
        shadow-4
      "
    >
      <h2 class="normal sans-serif i f2-ns f4">{{ date }}</h2>
      <h1 class="f1-ns f3">{{ heading }}</h1>
    </div> -->
    <div class="tl mh7 mv4 absolute" id="pre-click-header" :class="{'content-clicked': isExpanded}">
      <h2 class="f3-ns f5 normal sans-serif i">{{ date }}</h2>
      <h1 class="f1-ns f3">{{ heading }}</h1>

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
    
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  name: "TimelineCardRound",
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
      hover: false,
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
    onCardHover(){
        console.log("heyyy")
    }
  },
  mounted() {
    // this.id = "card" + this.index;
    gsap.to(".card-bg", {duration: 1, opacity: 0.5, width: '1000px', borderRadius: "0% 0% 50% 50%"})
  },
  updated () {
    gsap.to(".card-bg", {duration: 1, opacity: 0.5, width: '1000px', borderRadius: "0% 150px 150px 0%"})
    // gsap.to(".card-circle", {duration: 1, opacity: 0.5, right: '-13%', display: 'block'})
    gsap.to(".content-clicked", {duration: 1, x: '-250px'})
    gsap.to(".card-exp", {duration: 1, height: '800px', width: '1800px', x: '-300px', borderRadius: "0% 300px 300px 0%"})
  },
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
.card-hover{
    padding-right: 800px;
    opacity: 0.4;
}
.card-circle{
  right: -13%;
}
.content-clicked{

}
.card-exp{

}
</style>