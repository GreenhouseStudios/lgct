<template>
  <div class="section bg-lgct-red relative">
    <div class="flex justify-center items-center h-100">
    <stacked-card>
      <template v-slot:heading>
        What is the Morrill Act?
      </template>
          In 1862, the United States government passed “an Act donating public lands to the several states and territories which may provide Colleges for the benefit of Agriculture and the 
Mechanic Arts,” known as the Morrill Act. These public lands were established by the systematic and often violent dispossession of Indigenous people by the United States government. The colleges established benefitted white citizens then and, at many institutions, continue to disproportionately benefit white citizens today.

The land tied to UConn’s Land Grant status spans 12 states originally stewarded by 
Indigenous tribes. The University of Connecticut became Connecticut’s Land Grant college in 1893. Upon receiving land grant status by the state, the University of Connecticut directly benefited from the <b>178190.04</b> acres of land and the <b>$135,000.84 ($3,598,150.99 today)</b> raised from it through annual interest payments to the university. The state of Connecticut paid <b>$12,763.01</b> for the land scrips. 
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