<template>
  <div
    @click.prevent="isExpanded = !isExpanded"
    :class="{ expanded: isExpanded }"
    class="bg-light-gray serif pl5-ns ph4 w-40-ns w-100 pt3 pb4 ma4-ns grow"
  >
    <span class="tl">
      <h2>{{ date }}</h2>
      <h1>{{ heading }}</h1>
    </span>
    <div v-show="isExpanded">
      <div class="flex flex-row-ns flex-column items-start">
        <div class="w-50-ns order-2 order-0-ns">
          <p v-for="(child, index) in blockChildren" :key="index" class="mt0">
            {{ child[0].text }}
          </p>
           <button
          @click.stop="$emit('open-modal')"
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
        <img class="mw5 mh4-ns mb3 order-1" :src="url" alt="placeholder image" />
      </div>
      <div>
       
      </div>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import client from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
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
    };
  },
  computed: {
    url() {
      return this.img
        ? this.builder.image(this.img)
        : "https://via.placeholder.com/150";
    },
    blockChildren(){
      return this.body.map(x => x.children).filter(x => x.text !== "\n")
    }
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.expanded {
  overflow-y: hidden;
}
</style>