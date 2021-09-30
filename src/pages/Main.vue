<template>
  <div class="relative">
    <Nav></Nav>
    <div>
      <h1 class="dn-m dn-s hot-pink absolute top-0 right-0">Large</h1>
    </div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home></Home>
      <MorrillAct></MorrillAct>
      <div class="section bg-lgct-white relative">
        <div class="flex flex-column items-center justify-center h-100">
          <stacked-card headColor="bg-lgct-red" mainColor="bg-moon-gray">
            <template v-slot:heading>The Objective of Land Grab CT</template>
            In 1862, the United States government passed “an Act donating public
            lands to the several states and territories which may provide
            Colleges for the benefit of Agriculture and the Mechanic Arts,”
            known as the Morrill Act. These public lands were established by the
            systematic and violent dispossession of Indigenous people by the
            United States government. The land tied to UConn’s Land Grant status
            spans 12 states originally stewarded by Indigenous tribes. The
            colleges established benefitted white citizens then and continue to
            disproportionately benefit white citizens today. The University of
            Connecticut became Connecticut’s Land Grant college in 1893. Upon
            receiving land grant status by the state, the University of
            Connecticut directly benefited from the 178190.04 acres of land and
            the $135,000.84 ($3,598,150.99 today) raised from it through annual
            payments to the university. The state of Connecticut paid
            $12,763.01.
          </stacked-card>
        </div>
        <curved-border :color="'black'"></curved-border>
      </div>
      <div
        class="section overflow-hidden relative"
        style="background-color: #000000"
      >
        <div class="flex flex-column justify-center align-center">
          <h1 class="f1 white">Mapping the Impact</h1>
          <!-- <img class="mw-30" :src="require('/src/assets/map.png')" /> -->
          <!-- <div style="background-image: url('require')"></div> -->
          <video autoplay loop>
            <source :src="require('../assets/ArcsWStatesDrawOnV2.mp4')" loop type="video/mp4">
          </video>
        </div>
        <curved-border :color="'red'" :left="true"></curved-border>
      </div>
      <div class="section relative bg-lgct-red">
        <div class="flex items-center">
          <rounded-card :img="require('../assets/LG_usa-silhouette.png')">
            <p>
              The interference of colonialism on the territory we now know as
              “The United States” disrupted the relationship of stewardship and
              respect to the land and generated the current displacement and
              destitution of Native Nations. The 1493 Doctrine of Discovery
              claimed Christians had the right to legally steal and occupy lands
              not yet claimed by their faith on the basis of Christianity's
              “religious superiority.” Embedded in this doctrine were notions of
              race and gender that further justified the supremacy of a white
              Christian race. The United States adopted these notions in its
              construction as a nation. Through these adoptions, the country and
              its government have taken lands and rights from Native Nations in
              the interest and gain of white settlers.
            </p>

            <p>
              Although not all encompassing, this timeline shows significant
              historical events that reveal the patterns and strategies the
              United States government implemented through its history to erode
              the sovereignty and agency of Indigenous peoples, and their
              relationship with their territory.
            </p>
          </rounded-card>
          <div class="ma3 fr flex items-center">
            <link-button
              :buttonLink="'/timeline/National Timeline'"
              
            ></link-button>
          </div>
        </div>
        <curved-border :color="'white'"></curved-border>
      </div>

      <div class="section relative bg-lgct-white">
        <rounded-card
          :flip="true"
          :heading="'Connecticut Timeline'"
          :img="require('../assets/LG_ct-silhouette.png')"
        >
          The University of Connecticut is built on land originally stewarded by
          Indigenous peoples and was taken by brutal force. The University of
          Connecticut also continues to benefit from the Morrill Act of 1862, as
          well as subsequent governmental acts, that were made possible by the
          systematic dispossession of Indigenous peoples in other parts of the
          country by the United States government. This timeline gives a glimpse
          into how the state of Connecticut was formed and how the University of
          Connecticut came to be its Land Grant University.
        </rounded-card>
        <div class="ma3 absolute right-1 bottom-1 flex items-center">
          <link-button
            :buttonLink="'/timeline/Connecticut Timeline'"
          ></link-button>
        </div>
        <curved-border :color="'teal'"></curved-border>
      </div>

      <div class="section relative bg-lgct-gold">
        <rounded-card :isTitle="true" :heading="'Land Parcels'"></rounded-card>
          <div class="ma3 absolute right-1 bottom-1 flex items-center">
          <link-button
            :buttonLink="'/vignettes'"
          ></link-button>
        </div>
        <curved-border :color="'gold'"></curved-border>
      </div>

      <div class="section white bg-lgct-red relative">
        <rounded-card
          :isTitle="true"
          :heading="'About the Project'"
          :img="require('../assets/LG_horizontal-yellow-shape-progression.png')"
          :flip="true"
          bgColor="#EAC574"
        ></rounded-card>
        <div class="ma3 absolute right-1 bottom-1 flex items-center z-1">
          <link-button
            :buttonLink="'/about'"
          ></link-button>
        </div>
      </div>

      <Footer></Footer>
    </full-page>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import Home from "../components/Home.vue";
import Footer from "../components/Footer.vue";
import MorrillAct from "../components/MorrillAct.vue";
import StackedCard from "../components/StackedCard.vue";
import CurvedBorder from "../components/CurvedBorder.vue";
import RoundedCard from "../components/RoundedCard.vue";
import LinkButton from "../components/LinkButton.vue";
import Nav from "../components/Nav.vue";
export default {
  name: "Landing",
  components: {
    Home,
    Footer,
    MorrillAct,
    StackedCard,
    CurvedBorder,
    RoundedCard,
    Nav,
    LinkButton,
  },
  data() {
    return {
      homeActive: true,
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        scrollBar: true,
        menu: "#menu",
        autoScrolling: true,
        fitToSection: false,
        sectionsColor: [
          "#FEFCF5", //white
          "#AA4F37", //red
          "#FEFCF5", //white
          "#000", //black
          "#AA4F37", //red
          "#FEFCF5", //white
          "#70B9B2", //teal
          "#EDC35B", //red
          "#AA4F37",
        ],

        onLeave: this.showOrHideToTopButton,
      },
    };
  },
};
</script>

<style scoped>
</style>