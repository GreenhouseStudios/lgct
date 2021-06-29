<template>
  <div @click="isExpanded = !isExpanded" :class="{expanded: isExpanded}" class="bg-light-gray serif pl5 w-40 pt3 pb6 ma4 grow">
    <span class="tl">
      <h2>{{ date }}</h2>
      <h1>{{ heading }}</h1>
    </span>
    <span v-show="isExpanded" class="flex flex-row flex-wrap">
    <p class="w-50 mh4">{{ body }}</p>
    <img class="w-30 mh4" :src="url" alt="placeholder image">
    <button @click.stop="$emit('open-modal')" class="sans-serif blue f5 bn grow hover-bg-light-blue pa2 no-underline underline-hover">Read More</button>
    </span>
    
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import client from '../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
export default {
  name: "TimelineCard",
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
      type: String,
      default: ipsum.generateParagraphs(2),
    },
    color: {
        type: String,
        default: '#F00'
    },
    img:{
      type: Object,
    }
  },
  data() {
    return {
      ipsum: ipsum,
      isExpanded: false,
      builder: imageUrlBuilder(client)
    };
  },
  computed: {
    url() {
      return this.img ? this.builder.image(this.img) : "https://via.placeholder.com/150"
    }
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
.expanded {
    height: 60vh;
    width: 60vw;
}
</style>