<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home></Home>
      <MorrillAct></MorrillAct>

      <div class="section overflow-hidden">
        <div class="flex flex-column justify-center align-center">
          <h1 class="f1 white">Mapping the Impact</h1>
          <img class="mw-30" :src="require('/src/assets/map.png')" />
        </div>
      </div>
      <div class="section ph7-ns pv5-ns">
        <p class="f1-ns f3 ph6-ns pa4 mh5-ns lh-title-ns i">
          Land Grab Connecticut is an initiative created by Greenhouse Studios
          at the University of Connecticut to recognize the weight and impact of
          Land Grant Universities, institutionalized by the Morrill Act of 1862,
          by highlighting the generational opportunity costs imposed on the
          Indigenous communities affected by land seizure.
        </p>
      </div>
      <div class="section">
        <div class="flex flex-row-l flex-column w-100 justify-center">
          <div class="w-40-ns vh-100-ns vh-50 pa5-ns pa3 bg-light-gray">
            <router-link to="/timeline/National Timeline" style="text-decoration: none; color: inherit;">
              <div class="flex flex-column justify-center grow">
                <h1 class="f1-ns f4">National Timeline</h1>
              </div>
            </router-link>
            <p class="f2-ns">
              Land acts like the Morrill Act were made possible by the
              systematic dispossession of Indigenous peoples by the United
              States government and the establishment of land as ownable and
              exploitable for profit. This timeline gives a glimpse into how the
              United States government first gained its colonial “claim” to
              native land and expanded it through violence towards Indigenous
              people and other colonial governments.
            </p>
          </div>

          <div class="w-40-ns vh-100-ns vh-50 pa5-ns pa3 bg-lightest-blue">
            <router-link to="/timeline/Connecticut Timeline" style="text-decoration: none; color: inherit;">
              <div class="flex flex-column justify-center grow">
                <h1 class="f1-ns f4">Connecticut Timeline</h1>
              </div>
            </router-link>
            <p class="f2-ns">
              The University of Connecticut is built on land originally
              stewarded by Indigenous peoples and was taken by brutal force. The
              University of Connecticut also continues to benefit from the
              Morrill Act of 1862, as well as subsequent governmental acts, that
              were made possible by the systematic dispossession of Indigenous
              peoples in other parts of the country by the United States
              government. This timeline gives a glimpse into how the state of
              Connecticut was formed and how the University of Connecticut came
              to be its Land Grant University.
            </p>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="pa6-ns pa3">
          <span class="ma5-ns ma2 b--white flex flex-column white">
            <router-link to="/Assumption" style="text-decoration: none; color: inherit;">
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
      </div>

      <div class="section">
        <div class="pa7-ns ph3 pv5 white">
          <h1 class="f-headline-ns">Cultural Involvement</h1>
          <p class="f1-ns f3 lh-title">
            Learn more about contemporary indigenous cultures
          </p>
        </div>
      </div>

      <div class="section">
        <div class="pv2 ph3">
          <h1 class="f-headline-ns f3 absolute-ns tl-ns ma5-ns">
            Activism and Resources
          </h1>
        </div>
        <div class="pv7-ns">
          <div class="flex flex-row-ns flex-column items-center justify-center">
            <div v-for="i in 3" :key="i" class="w-33-ns ph3-ns ph2">
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
            </div>
          </div>
        </div>
      </div>

      <div class="section white">
        <h1 class="f-subheadline-ns f1 pv5">About the Project</h1>
        <p class="f1-ns f5 ph6-ns pa4 mh5-ns lh-title-ns i">
          Learn more about the process and team members
        </p>
        <div class="flex flex-row-ns flex-column items-center justify-center">
          <div v-for="i in 3" :key="i" class="w-33-ns ph3-ns ph2">
            <h2 class="f2-ns f4">Team Member</h2>
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
export default {
  name: "Landing",
  components: {
    Home,
    Footer,
    MorrillAct,
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
          "#FEFCF5",
          "#FEFCF5",
          "#000000",
          "#FEFCF5",
          "#AA4F37",
          "#82b8b3",
          "#AA4F37",
          "#FEFCF5",
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