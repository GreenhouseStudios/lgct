<template>
  <div class="section bg-lgct-gold pa0-ns pa2">
    <div class="h-100 flex items-center justify-between" id="largescreen">
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
    <div id="smallscreen">
      <div class="flex flex-column">
        <div class="f6 bg-light-gray br3 shadow-2">
          <h1>{{ currentPerson.name }}</h1>
        </div>
        <div class="bg-light-gray br4 pa1 ph2 shadow-2">
          <img :src="currentPerson.img" alt="image of team member" />
          <p>{{ currentPerson.bio }}</p>
        </div>
      </div>
      <div class="flex justify-center mv2 w-100">
        <button
          @click="changeIndex(-1)"
          class="w2 h2 bg-moon-gray br-100 bn grow shadow-4 mh2"
          :style="{ backgroundColor: this.btnColor }"
        >
          <i class="white fa fa-chevron-left"></i>
        </button>
        <button
          @click="changeIndex(1)"
          class="w2 h2 bg-moon-gray br-100 bn grow shadow-4 m2"
          :style="{ backgroundColor: this.btnColor }"
        >
          <i class="white fa fa-chevron-right"></i>
        </button>
      </div>
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
          name: "Luisa Fernanda Arrieta Fernandez",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Tom Lee",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Mackenzie Fox",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Miles Waterbury",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Sage Phillips (she/her)",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Carly Wanner-Hyde (she/her)",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Lauren Harland (she/her)",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Cameron Slocum",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Roya Movahed",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
        },
        {
          name: "Glenn Mitoma",
          bio: ipsum.generateParagraphs(1),
          img: require("../assets/lgct-logo.png"),
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
      this.index =
        this.index === 0 && dir < 0
          ? this.people.length - 1
          : (this.index + dir) % this.people.length;
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
@media screen and (min-width: 60em) {
  #largescreen {
    display: flex;
  }
  #smallscreen {
    display: none;
  }
}
@media screen and (max-width: 60em) {
  #largescreen {
    display: none;
  }
  #smallscreen {
    display: inline;
  }
}
</style>