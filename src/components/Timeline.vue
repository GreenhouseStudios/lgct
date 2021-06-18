<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      
      <div class="section pa7">
        <h1 class="f-headline">Land Grab Timeline</h1>
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
            "#000000",
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
    transform: scale(1,1000) translate(30vw);
}
</style>