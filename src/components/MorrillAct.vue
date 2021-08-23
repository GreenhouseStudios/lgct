<template>
  <div class="section bg-lgct-red relative">
    <div class="flex justify-center align-center items-center h-100">
    <stacked-card class="ml7-l">
      <template v-slot:heading>
        What is the Morrill Act?
      </template>
        <p class="i fw4 f2-l f6">
          In 1862, the United States government passed “an Act donating public
          lands to the several states and territories which may provide Colleges
          for the benefit of Agriculture and the Mechanic Arts,” known as the
          Morrill Act. These public lands were established by the systematic and
          violent dispossession of Indigenous people by the United States
          government. The land tied to UConn’s Land Grant status spans 12 states
          originally stewarded by Indigenous tribes. The colleges established
          benefitted white citizens then and continue to disproportionately
          benefit white citizens today. The University of Connecticut became
          Connecticut’s Land Grant college in 1893. Upon receiving land grant
          status by the state, the University of Connecticut directly benefited
          from the 178190.04 acres of land and the $135,000.84 ($3,598,150.99
          today) raised from it through annual payments to the university. The
          state of Connecticut paid $12,763.01.
        </p>
    </stacked-card>
    </div>
    <curved-border :left="true" :color="'white'"></curved-border>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StackedCard from "./StackedCard.vue";
import CurvedBorder from "./CurvedBorder.vue"
export default {
  components: { StackedCard, 
  CurvedBorder 
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from("#morrill", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#morrill-trigger",
        start: "top center",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.section{
  background-color: #AA4F37;
  min-height: 100vh;
}
</style>