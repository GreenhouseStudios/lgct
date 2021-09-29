<template>
  <div class="bg-lgct-white relative">
    <home-logo class="z-1"></home-logo>
    <div class="section relative">
      <div class="h-100 flex justify-center items-end">
        <!-- <h1 class="f-headline-l f1 serif ma0">
          {{ this.$route.params.title }}
        </h1> -->
        <rounded-card-vertical>
          {{this.$route.params.title}}
        </rounded-card-vertical>
      </div>
      <i
        class="fa fa-chevron-down absolute bottom-2 mb4 lgct-white"
        style="transform: scale(2); z-index: 100"
      ></i>
      <curved-border :tall="true"></curved-border>
    </div>

    <div class="bg-lgct-red">
      <div v-if="cards !== null" class="w-100">
        <div
          class="pv6-ns pv3 mb5"
          v-for="(card, index) in cards"
          :key="card.heading"
        >
          <div class="flex flex-column items-start ph7-l pl5 pr6">
            <timeline-card-round
              :heading="card.heading"
              :body="card.body"
              :fullBody="card.fullBody"
              :date="card.date"
              :img="card.img"
              :index="index"
              v-on:open-modal="openModal(index)"
            >
            </timeline-card-round>
          </div>
        </div>
      </div>
    </div>
    <detail-modal
      :showModal="showModal"
      :card="activeCard"
      v-on:close-modal="closeModal()"
    ></detail-modal>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
// import TimelineCard from "../components/TimelineCard.vue";
import TimelineCardRound from "../components/TimelineCardRound.vue";
import DetailModal from "../components/DetailModal.vue";
import HomeLogo from "../components/HomeLogo.vue";
import CurvedBorder from "../components/CurvedBorder.vue";
import RoundedCardVertical from "../components/RoundedCardVertical.vue"
import axios from "axios";
import _ from "lodash";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    // TimelineCard,
    TimelineCardRound,
    CurvedBorder,
    DetailModal,
    HomeLogo,
    RoundedCardVertical
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
  updated() {},
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
.section{
  height: 100vh;
}
</style>