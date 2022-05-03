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
            The Land Grab CT project was inspired by the <a href="https://landgrabu.org" target="_blank" class="blue b di">Land Grab U</a> project, which extensively collected and mapped land data tied to land-grant universities and the 1862 Morrill Act. Our website is a localization of the data from the Land Grab U project and an expansion of their work in a larger colonial context. Land Grab CT specifically focuses on UConn’s status as a land-grant university and details UConn’s acquisition and control of the land it currently resides on as well as the parcels of land from which it benefits.This project aims to inform viewers about UConn’s participation in the construction of colonial systems of higher education. It invites them to interrogate their assumptions about these systems and their impact on Native communities.
          </stacked-card>
        </div>
        <curved-border :color="'black'"></curved-border>
      </div>
      <div
        class="section overflow-hidden relative"
        style="background-color: #000000"
      >
        <div class="flex flex-column justify-center align-center h-100">
          <h1 class="f1-ns f3 white">Mapping the Impact</h1>
          <!-- <img class="mw-30" :src="require('/src/assets/map.png')" /> -->
          <!-- <div style="background-image: url('require')"></div> -->
          <div class="w-75-ns w-90 center flex flex-column justify-center">
            <video autoplay loop muted class="w-100" id="video1" controls v-if="videoSrc">
              <source
                :src="videoSrc"
                loop
                type="video/mp4"
              />
            </video>
            <p class="z-5 white bg-black br2 ph2 tl f4-ns f6">
              This animation is an artistic rendering of data from the Land Grab
              U project and does not fully represent that data. To see a more
              accurate representation, please visit
              <a
                href="https://www.landgrabu.org/universities/"
                class="blue di b"
                >landgrabu.org</a
              >, and select “Connecticut”.
            </p>
          </div>
        </div>
        <curved-border :color="'red'" :left="true"></curved-border>
      </div>
      <div class="section relative bg-lgct-red">
        <div class="flex items-center h-100">
          <rounded-card
            :img="require('../assets/LG_usa-silhouette.png')"
            :buttonurl="'/timeline/Connecticut Timeline'"
          >
            <p class="f5-ns f6">
              The land grant college and university system must be understood in the context of the larger history of dispossession of Indigneous peoples in North America.  At its root, colonialism is about land: control, commodification, extraction, and exploitation of territory in the service of settler interests.  In this way, the 1862 Morrill Land Grant Act marks a continuation and extension of a longer history of European and American appropriation, often by violence and coercion, of Native lands, and the transformation of that land into financial resources to benefit settler society.  

This dispossession was, from the very beginning, resisted, contested, and occasionally subverted by Native Tribes and individuals across the continent.  For many if not all Native cultures, the close connection between survival, identity, and geographic place meant that this process of dispossession, even if it was not, as it often was, accompanied by a deliberate policy of extermination, often amounted to attempted genocide.  The creativity, strength, and resilience of generations of Native peoples ensured that such attempts were unsuccessful. Today, these vibrant, sovereign communities are forging new futures at the same time the work to reclaim much of what they lost

The following timeline presents an overview of key episodes in the history of colonial dispossession, Native resistance, and the intersection with education policy and practice. 

            </p>

          </rounded-card>
          <div class="ma3 fr flex items-center">
            <link-button
              :buttonLink="'/timeline/National Timeline'"
              class="db-l db-m dn"
            ></link-button>
          </div>
        </div>
        <curved-border :color="'white'" class="z-3"></curved-border>
      </div>

      <div class="section relative bg-lgct-white">
        <rounded-card
          :flip="true"
          :heading="'Connecticut Timeline'"
          :img="require('../assets/LG_ct-silhouette.png')"
          :buttonurl="'/timeline/Connecticut Timeline'"
          :buttoncolor="'#aa4f37'"
        >
          <p class="f3-ns f4-m f4">
            This timeline examines the history of the University of Connecticut within the larger system of colonialism. This history includes the roots of colonialism in land control, commodification, extraction and exploitation, which are integral in the formation of the state of Connecticut and the establishment and ongoing funding of the University of Connecticut.  Although not comprehensive, this timeline presents an overview of key episodes in the ongoing acquisition of land that has constructed modern day UConn. 
          </p>
        </rounded-card>
        <curved-border :color="'teal'" class="z-3"></curved-border>
      </div>

      <div class="section relative bg-lgct-gold">
        <div class="flex items-center h-100">
          <rounded-card
            
            :heading="'Land Parcels'"
            :img="
              require('../assets/LG_horizontal-blue-shape-progression-06.png')
            "
            style="flex: 1 !important"
          ><p class="f3-ns f4">Virtually visit a selection of parcels that currently benefit the University of Connecticut. Learn about how the land is being used today, the Native peoples of this land, and the history of how settlers appropriated and exploited it. </p></rounded-card>
          <div class="ma3 fr flex items-center">
            <!-- <div class="ma3 absolute right-1 bottom-1 flex items-center"> -->
            <link-button :buttonLink="'/parcels'"></link-button>
          </div>
          <curved-border :color="'gold'"></curved-border>
        </div>
      </div>

      <div class="section white bg-lgct-red relative">
        <rounded-card
          :isTitle="true"
          :heading="'About the Project'"
          :img="require('../assets/LG_horizontal-yellow-shape-progression.png')"
          :flip="true"
          :buttonurl="'/about'"
          bgColor="#EAC574"
        ></rounded-card>
      </div>

      <Footer></Footer>
    </full-page>
  </div>
</template>

<script>
var video = document.getElementById("video1"),
  fraction = 0.8;

function checkScroll() {
  var x = video.offsetLeft,
    y = video.offsetTop,
    w = video.offsetWidth,
    h = video.offsetHeight,
    r = x + w, //right
    b = y + h, //bottom
    visibleX,
    visibleY,
    visible;

  visibleX = Math.max(
    0,
    Math.min(
      w,
      window.pageXOffset + window.innerWidth - x,
      r - window.pageXOffset
    )
  );
  visibleY = Math.max(
    0,
    Math.min(
      h,
      window.pageYOffset + window.innerHeight - y,
      b - window.pageYOffset
    )
  );

  visible = (visibleX * visibleY) / (w * h);

  if (visible > fraction) {
    video.play();
  } else {
    video.pause();
  }
}

checkScroll();
window.addEventListener("scroll", checkScroll, false);
window.addEventListener("resize", checkScroll, false);
</script>

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
      videoSrc: null,
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
  mounted () {
    this.videoSrc = require('../assets/FinalAnimationHD.mp4');
  },
};
</script>

<style scoped>
</style>