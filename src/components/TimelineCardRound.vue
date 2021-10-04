<template>
  <div
    @click="expandCard"
    @mouseover="onCardHover(true)"
    @mouseleave="onCardHover(false)"
    class="pa5 br--right w-80-l w-100 h-100 ml6-ns"
    :class="{ root: !isExpanded, 'root-expanded': isExpanded }"
  >
    <div class="tl z-1 pa2" :class="{ 'content-clicked': isExpanded }">
      <div
        :class="{
          'dark-gray': hover || isExpanded,
          'lgct-white': !hover && !isExpanded,
        }"
      >
        <h2 class="f3-ns f5 normal sans-serif i">
          {{ event.date }}
        </h2>
        <h1 class="f1-ns f3">
          {{ event.heading }}
        </h1>
      </div>
      <div v-show="isExpanded" id="expanded-card-body">
        <div class="ma2 pr6-ns tl lh-copy fw8 f3-ns f6 w-100">
          <p v-html="blocksToHTML({ blocks: event.body })"></p>
          <p
            v-if="event.fullBody"
            v-show="showMore"
            v-html="blocksToHTML({ blocks: event.fullBody })"
          ></p>
        </div>

        <span
          id="read-more-button"
          class="relative right-0 br-100 hover-bg-light-blue"
          v-on:click.stop="toggleReadMore"
          v-if="event.fullBody"
          v-show="!showMore"
          ><div class="relative flex justify-center items-center f2">
            <span><i class="fa fa-lg fa-chevron-down"></i></span></div
        ></span>
        <span
          id="read-less-button"
          class="relative right-0 br-100 hover-bg-light-blue"
          v-on:click.stop="toggleReadMore"
          v-if="event.fullBody"
          v-show="showMore"
          ><div class="relative flex justify-center items-center f2">
            <span><i class="fa fa-lg fa-chevron-up"></i></span></div
        ></span>

        <div v-if="event.childPosts">
          <button
            v-for="post in event.childPosts"
            :key="post.heading"
            @click.stop="$emit('open-modal',post)"
            class="f4-ns f6 fw7 lgct-red bn shadow-1 serif grow no-underline br-pill ba ph3 pv2 mb2 mh3 dib mid-gray"
          >
            {{ post.heading }}
          </button>
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
export default {
  name: "TimelineCardRound",
  components: {},
  props: {
    event: {
      type: Object,
    },
    color: {
      type: String,
      default: "#F00",
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
      timeline: null,
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
    width() {
      return window.innerWidth;
    },
    containerHeight() {
      if (this.rawHeight < 30) return "30em";
      else return this.rawHeight + "em";
    },
    rawHeight() {
      return Math.floor(
        this.body
          .map((x) =>
            x.children
              .map((y) => y.text.split(" ").length)
              .reduce(function (acc, a) {
                return acc + a;
              })
          )
          .reduce(function (acc, a) {
            return acc + a;
          }) / 8
      );
    },
    bodyChildren() {
      return this.body.map((x) =>
        x.children.map((y) => y.text.split(" ").length)
      );
    },
  },
  methods: {
    expandCard() {
      this.isExpanded = true;
    },
    collapseCard() {
      this.isExpanded = false;
    },
    toggleReadMore() {
      this.showMore = !this.showMore;
    },
    onCardHover(state) {
      if (state != this.hover) {
        this.hover = state;
        this.timeline.reversed(!this.timeline.reversed());
      }
    },
  },
  updated() {
    this.timeline = gsap.timeline().to(".hovered.card-bg", {
      duration: 1,
      opacity: 0.5,

      borderRadius: "0% 150px 150px 0%",
      ease: "back",
    });

    gsap.to(".root-expanded", {
      duration: 1,
      margin: 0,
      paddingLeft: "4%",
      ease: "back",
    });
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
.card-hover {
  padding-right: 800px;
  opacity: 0.4;
}
.card-circle {
  right: -13%;
}
.content-clicked {
}
.card-exp {
}
#read-more-button {
  right: -30%;
}
#read-less-button {
  right: -30%;
}
.root {
  border-radius: 0 10000px 10000px 0;
  background-size: 200% !important;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4) 52%,
    rgba(255, 255, 255, 0) 50%
  );
  background-position: right bottom;
  transition: all 0.6s cubic-bezier(0.68, 0.35, 0.265, 1);
}
.root:hover {
  background-position: left bottom;
}
.root-expanded {
  border-radius: 0 10000px 10000px 0;
  background-size: 200% !important;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4) 100%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 10px 5px 5px rgba(50,50,50,0.2);
}
</style>