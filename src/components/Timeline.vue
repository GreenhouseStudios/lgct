<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <nav class="db dt-l w-10 border-box pa3 mt3 right-0 absolute">
      <a
        @click="$router.push('./')"
        class="f4 fw6 black link dim ma3"
        >Home</a
      >
    </nav>
      <div class="section pa7">
        <h1 class="f-headline-l f1">Land Grab Timeline</h1>
        <div class="w2 h3 bl bw2 black line"></div>
      </div>
      <div class="section pv6" v-for="card in cards" :key="card.heading">
        <div class="flex flex-column items-center">
          <timeline-card :heading="card.heading" :body="card.body">
          </timeline-card>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import TimelineCard from "./TimelineCard.vue";

import _ from "lodash";
export default {
  components: {
    TimelineCard,
  },
  data() {
    return {
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        sectionsColor: _.flatten(
          Array(100).fill([
            "#FEFCF5",
            "#222",
            "#FEFCF5",
            "#AA4F37",
            "#82b8b3",
          ])
        ),
        onLeave: this.showOrHideToTopButton,
      },
      cards: Array(100).fill({}),
    };
  },
};
</script>

<style lang="scss" scoped>
.lineParent {
  position: relative;
  top: 0%;
  left: 0;
}
.line{
    transform: translateX(30vw) translateY(15vh);
    height: 100000vh;
}
</style>