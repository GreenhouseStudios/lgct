<template>
  <div>
    <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
      <nav class="db-ns dn dt-l w-10 border-box pa3 mt3 right-0 absolute">
        <a @click="$router.push('/')" class="f4 fw6 black link dim ma3"
          >Home</a
        >
      </nav>
      <div class="section pa7-ns">
        <h1 class="f-headline-l f1">{{this.$route.params.title}}</h1>
        <div class="w2 h3 bl bw1 black line absolute"></div>
      </div>
      <div v-if="cards !== null" class="w-100">
        <div class="section pv6-ns pv3" v-for="card in cards" :key="card.heading">
          <div class="flex flex-column items-center">
            <timeline-card :heading="card.heading" :body="card.body" :date="card.date" :img="card.img" v-on:open-modal="openModal()">
            </timeline-card>
          </div>
        </div>
      </div>
    <!-- </full-page> -->
    <detail-modal :showModal="showModal" v-on:close-modal="closeModal()"></detail-modal>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import TimelineCard from "./TimelineCard.vue";
import DetailModal from "./DetailModal.vue"
import axios from "axios";
import _ from "lodash";
export default {
  components: {
    TimelineCard,
    DetailModal,
  },
  props: {
    timelineTitle: {
      type: String,
      default: "National Timeline"
    },
  },
  name: "Timeline",
  data() {
    return {
      showModal: false,
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
  methods: {
    openModal() {
      this.showModal = true;
      console.log("show modal")
    },
    closeModal() {
      this.showModal = false;
      console.log("close modal")
    }
  },
  mounted() {
    const $vm = this;
    this.cards = [];
    axios
      .get(
        `https://hl710q4f.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20%24keyword%20in%20categories%5B%5D-%3Etitle%5D%20%7C%20order(date)%7B%0A%20%20title%2Cbody%2Cdate%2CmainImage%2C%20categories%0A%7D&%24keyword=%22${this.$route.params.title}%22`
      )
      .then(function (response) {
        const result = response.data.result;
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          $vm.cards.push( {
            heading: result[i].title,
            body: result[i].body,
            date: result[i].date ? result[i].date.substring(0,4) : "1492",
            img: result[i].mainImage
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