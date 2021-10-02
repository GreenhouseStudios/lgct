<template>
  <div>
    <div class="section bg-lgct-white relative">
      <home-logo></home-logo>
      <rounded-card :heading="'Land Parcels'" :isTitle="true"></rounded-card>
      <curved-border :color="'red'"></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-red
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75 h-50 z-0">
        <template v-slot:gps> 40.3442 N 96.5325 W</template>
        <template v-slot:heading
          >Jiwere (Otoe-Missouria), Pâri (Pawnee), Očhéthi Šakówiŋ
          Land</template
        >
        <template v-slot:subtitle>Currently known as Nebraska</template>
        <template v-slot:plot>NE060100N0070E0SN170ANECT</template>
        <p>
          On March 15, 1854 under Treaty No. 265 was signed by the United States
          government and the Otoe and Missouria People, ceding thousands of
          acres of Native land to the US Government to create land parcels that
          would eventually become part of the land used in the Morrill Act. One
          particular land parcel was 160 acres in size and cost the United
          States $20.67. The land ceded was granted to the University of
          Connecticut in 1862, which made a return of six times the original
          price - $121.22 was raised for the university from this one parcel of
          land. Today, residential homes and Currently known as Nebraska Wesleyan University sit on
          this parcel.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <collapsible-tab
          style="bottom: 180px"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 100px"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Appropriation and Uses</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 20px"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples on this Land</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
      </div>
      <curved-border
        :color="'white'"
        :left="true"
        style="z-index: 100"
      ></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-white
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75 h-50 z-0" mainColor="bg-moon-gray">
        <template v-slot:gps> 40.3442 N 96.5325 W</template>
        <template v-slot:heading
          >Jiwere (Otoe-Missouria), Pâri (Pawnee), Očhéthi Šakówiŋ
          Land</template
        >
        <template v-slot:subtitle>Currently known as Nebraska</template>
        <template v-slot:plot>NE060100N0070E0SN170ANECT</template>
        <p>
          On March 15, 1854 under Treaty No. 265 was signed by the United States
          government and the Otoe and Missouria People, ceding thousands of
          acres of Native land to the US Government to create land parcels that
          would eventually become part of the land used in the Morrill Act. One
          particular land parcel was 160 acres in size and cost the United
          States $20.67. The land ceded was granted to the University of
          Connecticut in 1862, which made a return of six times the original
          price - $121.22 was raised for the university from this one parcel of
          land. Today, residential homes and Currently known as Nebraska Wesleyan University sit on
          this parcel.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <collapsible-tab
          style="bottom: 180px"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 100px"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Appropriation and Uses</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 20px"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples on this Land</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
      </div>
      <curved-border :color="'red'" style="z-index: 100"></curved-border>
    </div>
    <div
      class="
        section
        bg-lgct-red
        flex
        justify-center
        items-center
        relative
        overflow-hidden
      "
    >
      <stacked-card-horizontal class="w-75 h-50 z-0">
        <template v-slot:gps> 40.3442 N 96.5325 W</template>
        <template v-slot:heading
          >Jiwere (Otoe-Missouria), Pâri (Pawnee), Očhéthi Šakówiŋ
          Land</template
        >
        <template v-slot:subtitle>Currently known as Nebraska</template>
        <template v-slot:plot>NE060100N0070E0SN170ANECT</template>
        <p>
          On March 15, 1854 under Treaty No. 265 was signed by the United States
          government and the Otoe and Missouria People, ceding thousands of
          acres of Native land to the US Government to create land parcels that
          would eventually become part of the land used in the Morrill Act. One
          particular land parcel was 160 acres in size and cost the United
          States $20.67. The land ceded was granted to the University of
          Connecticut in 1862, which made a return of six times the original
          price - $121.22 was raised for the university from this one parcel of
          land. Today, residential homes and Currently known as Nebraska Wesleyan University sit on
          this parcel.
        </p>
      </stacked-card-horizontal>
      <div class="lower serif lgct-white fw7 z-1">
        <collapsible-tab
          style="bottom: 180px"
          class="z-0"
          :template="'landToday'"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>The Land Today</template></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 100px"
          class="z-1"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
        >
          <template v-slot:heading>Appropriation and Uses</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
        <collapsible-tab
          style="bottom: 20px"
          class="z-2"
          v-on:toggle-tab="toggleTab('toggle me', $event)"
          ><template v-slot:heading>Native Peoples on this Land</template>
          <p>{{ ipsum.generateParagraphs(5) }}</p></collapsible-tab
        >
      </div>
      <curved-border
        :color="'white'"
        :left="true"
        style="z-index: 100"
      ></curved-border>
    </div>
  </div>
</template>

<script>
import CurvedBorder from "../components/CurvedBorder.vue";
import StackedCardHorizontal from "../components/StackedCardHorizontal.vue";
import CollapsibleTab from "../components/CollapsibleTab.vue";
import ipsum from "../ipsum.js";
import RoundedCard from "../components/RoundedCard.vue";
import HomeLogo from "../components/HomeLogo.vue";
export default {
  name: "Vignettes",
  components: {
    StackedCardHorizontal,
    CurvedBorder,
    CollapsibleTab,
    RoundedCard,
    HomeLogo,
  },
  data() {
    return {
      ipsum: ipsum,
      tabs: this.$children,
      activeTab: null,
    };
  },
  methods: {
    toggleTab(msg, e) {
      if (this.activeTab) this.activeTab.showContent = false;
      if (this.activeTab === e) {
        this.activeTab.showContent = false;
        return;
      }
      this.activeTab = e;
      this.activeTab.showContent = true;
    },
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