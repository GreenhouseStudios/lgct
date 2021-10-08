<template>
  <div class="section bg-lgct-gold">
    <div class="h-100 flex items-center justify-between">
      <button
        @click="changeIndex(-1)"
        class="w3 h3 bg-moon-gray br-100 bn grow shadow-4 absolute left-2"
        :style="{ backgroundColor: this.btnColor }"
      >
        <i class="white fa fa-2x fa-chevron-left"></i>
      </button>
      <div id="text-card" class="shadow-2 bg-light-gray pa6 mr6 fl w-60 h-80">
        <h1 class="f1 tl">{{ currentPerson.name }}</h1>
        <div class="flex">
          <p class="f3 tl lh-copy ml4">{{ currentPerson.bio }}</p>
        </div>
      </div>
      <div id="profile-image" class="shadow-3 bg-lgct-white w5 fl mr6"></div>
      <button
        @click="changeIndex(1)"
        class="w3 h3 bg-moon-gray br-100 bn grow shadow-4 right-2 absolute"
        :style="{ backgroundColor: this.btnColor }"
      >
        <i class="white fa fa-2x fa-chevron-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  props: {
    btnColor: {
      type: String,
      default: "light-gray",
    },
  },
  data() {
    return {
      ipsum: ipsum,
      people: [
        {
          name: "Name Here",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
        {
          name: "Name Name",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
        {
          name: "Name Here",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
        {
          name: "Name Here",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
        {
          name: "Name Here",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
        {
          name: "Name Here",
          bio: ipsum.generateParagraphs(1),
          img: "../assets/lgct-logo.png",
        },
      ],
      index: 0,
    };
  },
  computed: {
    currentPerson() {
      return this.people[this.index];
    },
  },
  methods: {
    changeIndex(dir) {
      this.index = this.index + dir;
    },
  },
};
</script>

<style lang="scss" scoped>
#profile-image {
  border-radius: 1000px 1000px 0 0;
  background-image: url("../assets/lgct-logo.png");
  background-repeat: no-repeat;
  background-size: 90%;
  background-position-y: 50%;
  background-position-x: 50%;
  height: 75vh;
  width: 25vw;
}
#text-card {
  border-radius: 0 1000px 1000px 0;
}
</style>