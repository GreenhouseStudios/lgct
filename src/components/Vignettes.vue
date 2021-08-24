<template>
  <div class="section bg-lgct-red flex justify-center items-center">
    <stacked-card-horizontal class="w-75 h-50 z-0">
      <template v-slot:heading>Nebraska</template>
      <template v-slot:subtitle
        >Jiwere (Otoe-Missouria), Pâri (Pawnee), Očhéthi Šakówiŋ Land</template
      >
      <template v-slot:plot>NE060100N0070E0SN170ANECT</template>
      <p>
        On March 15, 1854 under Treaty No. 265 was signed by the United States
        government and the Otoe and Missouria People, ceding thousands of acres
        of Native land to the US Government to create land parcels that would
        eventually become part of the land used in the Morrill Act. One
        particular land parcel was 160 acres in size and cost the United States
        $20.67. The land ceded was granted to the University of Connecticut in
        1862, which made a return of six times the original price - $121.22 was
        raised for the university from this one parcel of land. Today,
        residential homes and Nebraska Wesleyan University sit on this parcel.
      </p>
    </stacked-card-horizontal>
    <div class="lower serif lgct-white fw7 z-1">
      <collapsible-tab style="bottom: 160px;" class="z-0">The Land Today</collapsible-tab>
      <collapsible-tab style="bottom: 80px" class="z-1"> The Treaty of 1854</collapsible-tab>
      <collapsible-tab style="bottom: 0; " class="z-2">Native Peoples on this Land</collapsible-tab>
    </div>
    <curved-border :color="'white'" :left="true" style="z-index: 100"></curved-border>
  </div>
</template>

<script>
import CurvedBorder from "./CurvedBorder.vue";
import StackedCardHorizontal from "./StackedCardHorizontal.vue";
import CollapsibleTab from "./CollapsibleTab.vue"
import ipsum from "../ipsum.js";
export default {
  components: {
    StackedCardHorizontal,
    CurvedBorder,
    CollapsibleTab,
  },
  data() {
      return {
          shownTabs: [false,false,false],
          ipsum: ipsum,
          
      }
  },
  methods: {
      toggleTab(i) {
          this.shownTabs[i] = !this.shownTabs[i];
      }
  },
};
</script>

<style lang="scss" scoped>
.lower {
  height: 28%;
  width: 100%;
  position: absolute;
  bottom: 0;
}
</style>