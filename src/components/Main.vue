<template>
  <div>
    <Nav></Nav>
    <full-page ref="fullpage" :options="options" id="fullpage">
    <Home></Home>
    <MorrillAct></MorrillAct>
    <div class="section bg-lgct-white relative ">
      <div class="flex flex-column items-center justify-center h-100">
      <stacked-card headColor="bg-lgct-red" mainColor="bg-moon-gray" class="ml7-l">
        <template v-slot:heading>The Objective of Land Grab CT</template>
        <p class="f2-ns f5 i">
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
      <curved-border :color="'black'"></curved-border>
    </div>
    <div
      class="section overflow-hidden relative"
      style="background-color: #000000"
    >
      <div class="flex flex-column justify-center align-center">
        <h1 class="f1 white">Mapping the Impact</h1>
        <img class="mw-30" :src="require('/src/assets/map.png')" />
      </div>
      <curved-border :color="'red'" :left="true"></curved-border>
    </div>
    <div class="section relative">
      <rounded-card></rounded-card>
      <curved-border :color="'white'"></curved-border>
    </div>
    <div class="section relative bg-lgct-white">
      <rounded-card :flip="true" :buttonLink="'Connecticut Timeline'"></rounded-card>
      <curved-border :color="'teal'"></curved-border>
    </div>

    <div class="section bg-lgct-teal relative">
      <div class="pa6-ns pa3">
        <span class="ma5-ns ma2 b--white flex flex-column white">
          <router-link
            to="/Assumption"
            style="text-decoration: none; color: inherit"
          >
            <h1 class="w-40-ns w-25 f-headline-ns f1 tl v-mid grow">
              Assumptions vs Truth
              <img
                src="../assets/Arrow-White.svg"
                alt="arrow icon"
                class="mw3"
                style="fill: white"
              />
            </h1>
          </router-link>
          <h2>
            Learn the truth about the University's role in dispossesing
            generations of people from opportunity and prosperity.
          </h2>
        </span>
      </div>
      <curved-border :color="'red'" :left="true"></curved-border>
    </div>

    <div class="section relative bg-lgct-gold">
      <div class="pa7-ns ph3 pv5 white">
        <router-link
          to="/vignettes"
          style="text-decoration: none; color: inherit"
          ><h1 class="f-headline-ns grow">
            Land Grab Parcels
            <img
              src="../assets/Arrow-White.svg"
              alt="arrow icon"
              class="mw3"
              style="fill: white"
            /></h1
        ></router-link>
        <p class="f1-ns f3 lh-title">
          The stories of the lands
        </p>
      </div>
      <curved-border :color="'white'"></curved-border>
    </div>

    <div class="section bg-lgct-white relative">
      <div class="pv2 ph3">
        <router-link
          to="/resources"
          style="text-decoration: none; color: inherit"
        >
          <h1 class="f1-l f3-m relative-ns tl-ns ma5-ns grow">
            Activism and Resources
            <img
              src="../assets/Arrow.svg"
              alt="arrow icon"
              class="mw3"
              style="fill: white"
            />
          </h1>
        </router-link>
      </div>
      <div>
        <div class="flex flex-row-ns flex-column items-center justify-start align-start">
          <div v-for="i in 3" :key="i" class="w-33-ns h5 ph4-ns ph2 grow">
            <a
              href="https://www.landgrabu.org"
              style="text-decoration: none; color: inherit"
            >
              <h2 class="f2-ns f4">Land Grab U</h2>
              <div
                class="w5-ns h5-ns h3 w3 br-100 mv4-ns dib"
                style="background-color: #c5aa57"
              >
                <div
                  class="w5-ns h5-ns h3 w3 br-100"
                  style="
                    background-color: #232621;
                    transform: translate(5px, -5px);
                  "
                ></div>
              </div>
              <p class="f6">{{ ipsum.generateParagraphs(1) }}</p>
            </a>
          </div>
        </div>
      </div>
      <curved-border :color="'red'"></curved-border>
    </div>

    <div class="section white bg-lgct-red relative pa2">
      <router-link to="/about" style="text-decoration: none; color: inherit">
        <h1 class="f1-l f3-m relative-ns tl-ns ma5-ns grow">
          About the Project
          <img
            src="../assets/Arrow-White.svg"
            alt="arrow icon"
            class="mw3"
            style="fill: white"
          />
        </h1>
      </router-link>
      <!-- <p class="f1-ns f5 mh5-ns lh-title-ns i">
        Learn more about the process and team members
      </p> -->
      <div class="flex flex-row-ns flex-column justify-start items-start">
        <div v-for="i in 3" :key="i" class="w-33-ns ph3-ns ph2 grow">
          <router-link to="/about" style="text-decoration: none; color: inherit">
          <h2 class="f2-ns f4">Firstname Lastname</h2>
          <div
            class="w5-ns h5-ns h3 w3 br-100 mv4-ns dib"
            style="background-color: #c5aa57"
          >
            <div
              class="w5-ns h5-ns h3 w3 br-100"
              style="background-color: #232621; transform: translate(5px, -5px)"
            ></div>
          </div>
          <p class="f6">{{ ipsum.generateParagraphs(1) }}</p>
          </router-link>
        </div>
      </div>
    </div>

    <Footer></Footer>
    </full-page>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import Home from "./Home";
import Footer from "./Footer";
import MorrillAct from "./MorrillAct.vue";
import StackedCard from "./StackedCard.vue";
import CurvedBorder from "./CurvedBorder.vue";
import RoundedCard from "./RoundedCard.vue"
import Nav from "./Nav.vue"
export default {
  name: "Landing",
  components: {
    Home,
    Footer,
    MorrillAct,
    StackedCard,
    CurvedBorder,
    RoundedCard,
    Nav
  },
  data() {
    return {
      homeActive: true,
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        scrollBar: true,
        menu: "#menu",
        sectionsColor: [
          "#FEFCF5", //white
          "#AA4F37", //red
          "#FEFCF5", //white
          "#000",    //black
          "#FEFCF5", //white
          "#AA4F37", //red
          "#FEFCF5",
          "#FEFCF5", //teal
          "#70B9B2",
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