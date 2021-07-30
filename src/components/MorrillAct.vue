<template>
  <div class="section ph5-l pv5-l pa0 overflow-hidden" id="morrill">
    <h1 id="morrill-child" class="f-subheadline-l f1-m">
      What is the Morrill Act?
    </h1>
    <div id="morrill-trigger"></div>
    <p class="f3-ns f5 ph6-ns pa0 ma0 mh5-ns lh-title-ns i overflow-hidden">
      In 1862, the United States government passed “an Act donating public lands
      to the several states and territories which may provide Colleges for the
      benefit of Agriculture and the Mechanic Arts,” known as the Morrill Act.
      These public lands were established by the systematic and violent
      dispossession of Indigenous people by the United States government. The
      land tied to UConn’s Land Grant status spans 12 states originally
      stewarded by Indigenous tribes. The colleges established benefitted white
      citizens then and continue to disproportionately benefit white citizens
      today. The University of Connecticut became Connecticut’s Land Grant
      college in 1893. Upon receiving land grant status by the state, the
      University of Connecticut directly benefited from the 178190.04 acres of
      land and the $135,000.84 ($3,598,150.99 today) raised from it through
      annual payments to the university. The state of Connecticut paid
      $12,763.01.
    </p>
  </div>
</template>

<script>
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default {
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
</style>