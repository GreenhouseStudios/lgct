<template>
  <div>
    <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
      <nav class="db dt-l w-10 border-box pa3 mt3 right-0 absolute">
        <a @click="$router.push('./')" class="f4 fw6 black link dim ma3"
          >Home</a
        >
      </nav>
      <div class="section pa7">
        <h1 class="f-headline-l f1">Land Grab Timeline</h1>
        <div class="w2 h3 bl bw2 black line absolute"></div>
      </div>
      <div v-if="cards !== null">
        <div class="section pv6" v-for="card in cards" :key="card.heading">
          <div class="flex flex-column items-center">
            <timeline-card :heading="card.heading" :body="card.body">
            </timeline-card>
          </div>
        </div>
      </div>
    <!-- </full-page> -->
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import TimelineCard from "./TimelineCard.vue";
// import groq from 'groq'
import axios from "axios";
import _ from "lodash";
export default {
  components: {
    TimelineCard,
  },
  name: "Timeline",
  data() {
    return {
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        sectionsColor: _.flatten(
          Array(10).fill(["#FEFCF5", "#222", "#FEFCF5", "#AA4F37", "#82b8b3"])
        ),
        onLeave: this.showOrHideToTopButton,
      },
      cards: [],
    };
  },
  mounted() {
    const $vm = this;
    this.cards = [];
    axios
      .get(
        "https://hl710q4f.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7Btitle%2Cbody%7D"
      )
      .then(function (response) {
        const result = response.data.result;
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          $vm.cards.push( {
            heading: result[i].title,
            body: $vm.ipsum.generateParagraphs(1),
          });
        }
        // $vm.fp.destroy()
        // $vm.fp.reBuild();
      });
  },
//   updated () {
//       this.fp.reBuild();
//   },
//   beforeUpdate () {
//       this.fp.reBuild();
//   },
//   computed: {
//     fp() {
//       return window.fullpage_api;
//     },
//   },
};
</script>

<style lang="scss" scoped>
.lineParent {
  position: relative;
  top: 0%;
  left: 0;
}
.line {
  transform: translateX(30vw) translateY(15vh);
  height: 1000vh;
}
</style>