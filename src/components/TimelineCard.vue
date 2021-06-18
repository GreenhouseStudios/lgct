<template>
  <div @click="isExpanded = !isExpanded" :class="{expanded: isExpanded}" class="bg-moon-gray serif pl5 w-40 pt3 pb6 ma4 grow">
    <span class="tl">
      <h2>{{ date }}</h2>
      <h1>{{ heading }}</h1>
    </span>
    <span v-show="isExpanded" class="flex flex-row">
    <p class="w-50 mh4">{{ body }}</p>
    <img class="w-30 mh4" src="https://via.placeholder.com/150" alt="placeholder image">
    </span>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
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
    }
  },
  data() {
    return {
      ipsum: ipsum,
      isExpanded: false,
    };
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