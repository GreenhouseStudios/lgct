<template>
  <div
    @click="isExpanded = !isExpanded"
    :class="{ expanded: isExpanded }"
    class="bg-light-gray serif pl5 w-40 pt3 pb6 ma4 grow"
  >
    <span class="tl">
      <h2>{{ date }}</h2>
      <h1>{{ heading }}</h1>
    </span>
    <div v-show="isExpanded">
      <div class="flex flex-row">
        <div class="w-50">
          <p v-for="(child, index) in blockChildren" :key="index">
            {{ child[0].text }}
          </p>
           <button
          @click.self="$emit('open-modal')"
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
        <img class="w-30 mh4" :src="url" alt="placeholder image" />
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
  max-height: 80vh;
  width: 60vw;
  overflow-y: hidden;
}
</style>