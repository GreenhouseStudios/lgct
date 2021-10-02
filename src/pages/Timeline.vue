<template>
  <div class="bg-lgct-white relative">
    <home-logo class="z-1"></home-logo>
    <div class="section relative">
      <div class="h-75 pt5 tr">
        <!-- <rounded-card-vertical>
          {{this.$route.params.title}}
        </rounded-card-vertical> -->
        <rounded-card :isTitle="true" :heading="this.$route.params.title"></rounded-card>
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
          v-show="!card.hideInTimeline"
          :key="index"
        >
          <div class="flex flex-column items-start ph7-l pl5 pr6">
            <timeline-card-round
              :event="card"
              v-on:open-modal="openModal"
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
import TimelineCardRound from "../components/TimelineCardRound.vue";
import DetailModal from "../components/DetailModal.vue";
import HomeLogo from "../components/HomeLogo.vue";
import CurvedBorder from "../components/CurvedBorder.vue";
import RoundedCard from "../components/RoundedCard.vue"
import axios from "axios";
import _ from "lodash";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
  components: {
    TimelineCardRound,
    CurvedBorder,
    DetailModal,
    HomeLogo,
    RoundedCard
    // RoundedCardVertical

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
    openModal(post) {
      // this.activeCard = this.cards[index];
      this.activeCard = post;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  mounted() {
    const $vm = this;
    this.cards = [];
    axios
      .get(
        `https://hl710q4f.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20%24keyword%20in%20categories%5B%5D-%3Etitle%5D%20%7C%20order(date)%7B%0A%20%20title%2Cbody%2CfullBody%2Ccitations%2Cdate%2CmainImage%2CchildPosts%2C_id%2ChideInTimeline%2C%20categories%0A%7D&%24keyword=%22${this.$route.params.title}%22`
      )
      .then(function (response) {
        const result = response.data.result;
        for (let i = 0; i < result.length; i++) {
          $vm.cards.push({
            id: result[i]._id,
            heading: result[i].title,
            body: result[i].body,
            fullBody: result[i].fullBody,
            date: result[i].date ? result[i].date.substring(0, 4) : "1492",
            img: result[i].mainImage,
            citations: result[i].citations,
            childPosts: result[i].childPosts,
            hideInTimeline: result[i].hideInTimeline
          });
        }
        $vm.cards.forEach((el) =>{
          if(el.childPosts){
            for(var i = 0; i < el.childPosts.length; i++){
              el.childPosts[i] = $vm.cards.find(x => x.id === el.childPosts[i]._ref)
            }
          }
        })
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