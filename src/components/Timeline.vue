<template>
  <div class="bg-lgct-white relative">
    <router-link to="/">
      <img
        src="../assets/lgct-logo-long.png"
        alt="land grab connecticut logo long version"
        class="mw4 absolute top-2 left-2 pa2 bg-white br3"
      />
    </router-link>
    <div class="section flex justify-center items-center">
      <h1 class="f-headline-l f1 serif ma0">{{ this.$route.params.title }}</h1>
      <!-- <div class="w2 h3 bl bw1 black line absolute"></div> -->
      <i
        class="fa fa-chevron-down absolute bottom-2 mb4 lgct-white"
        style="transform: scale(2); z-index: 100"
      ></i>
      <curved-border :tall="true"></curved-border>
    </div>

    <div class="bg-lgct-red">
      <div v-if="cards !== null" class="w-100">
        <div
          class="section pv6-ns pv3"
          v-for="(card, index) in cards"
          :key="card.heading"
        >
          <div class="flex flex-column items-center">
            <div class="cardTrigger"></div>
            <timeline-card
              :heading="card.heading"
              :body="card.body"
              :fullBody="card.fullBody"
              :date="card.date"
              :img="card.img"
              :index="index"
              v-on:open-modal="openModal(index)"
            >
            </timeline-card>
          </div>
        </div>
      </div>
    </div>

    <!-- </full-page> -->
    <detail-modal
      :showModal="showModal"
      :card="activeCard"
      v-on:close-modal="closeModal()"
    ></detail-modal>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import TimelineCard from "./TimelineCard.vue";
import DetailModal from "./DetailModal.vue";
import CurvedBorder from "./CurvedBorder.vue";
import axios from "axios";
import _ from "lodash";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    TimelineCard,
    CurvedBorder,
    DetailModal,
  },
  props: {
    timelineTitle: {
      type: String,
      default: "National Timeline",
    },
  },
  name: "Timeline",
  data() {
    return {
      showModal: false,
      ipsum: ipsum,
      activeCard: { fullBody: "" },
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
    openModal(index) {
      this.activeCard = this.cards[index];
      this.showModal = true;
      console.log("show modal");
    },
    closeModal() {
      this.showModal = false;
      console.log("close modal");
    },
  },
  mounted() {
    const $vm = this;
    this.cards = [];
    axios
      .get(
        `https://hl710q4f.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20%24keyword%20in%20categories%5B%5D-%3Etitle%5D%20%7C%20order(date)%7B%0A%20%20title%2Cbody%2CfullBody%2Ccitations%2Cdate%2CmainImage%2C%20categories%0A%7D&%24keyword=%22${this.$route.params.title}%22`
      )
      .then(function (response) {
        const result = response.data.result;
        console.log(result);
        for (let i = 0; i < result.length; i++) {
          $vm.cards.push({
            heading: result[i].title,
            body: result[i].body,
            fullBody: result[i].fullBody,
            date: result[i].date ? result[i].date.substring(0, 4) : "1492",
            img: result[i].mainImage,
            citations: result[i].citations,
          });
        }
        // $vm.fp.destroy()
        // $vm.fp.reBuild();
      });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".line", {
      opacity: 0,
      duration: 5,
      ease: "power2.out",
    });
  },
  updated() {
  },
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
  z-index: -10;
}
</style>