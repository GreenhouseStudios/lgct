<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <Home></Home>
      <div class="section">
        <div>
          <h1 class="f1 white pa5">Mapping the Impact</h1>
          <img class="fl" :src="require('/src/assets/map.png')" />
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
            <router-link to="/timeline/National Timeline">
              <div class="flex flex-column justify-center grow">
                <h1 class="f1-ns f4">National Timeline</h1>
              </div>
            </router-link>
            <p>{{ipsum.generateParagraphs(1)}}</p>
          </div>

           <div class="w-40-ns vh-100-ns vh-50 pa5-ns pa3 bg-lightest-blue">
              <router-link to="/timeline/Connecticut Timeline">
              <div class="flex flex-column justify-center grow">
                <h1 class="f1-ns f4">Connecticut Timeline</h1>
              </div>
            </router-link>
            <p>{{ipsum.generateParagraphs(1)}}</p>
          </div>
        </div>
      </div>

      <div class="section" id="ind">
        <div class="pa6-ns pa3">
          <span class="ma5-ns ma2 b--white flex flex-row grow">
            <h1 class="w-40-ns w-25 f-headline-ns f1 tl v-mid white">Indigenous Peoples</h1>
          </span>
        </div>
      </div>

      <div class="section">
        <div class="pa7-ns ph3 pv5">
          <p class="f1-ns f3 athelas lh-title">
            A very well written explanation on what the timeline details and
            what it aims to accomplish using this series of events, and how it
            ties into today.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="pv2 ph3">
          <h1 class="f2 absolute-ns tl ma5-ns">Other Initiatives</h1>
        </div>
        <div class="pv7-ns">
          <div class="flex flex-row-ns flex-column items-center justify-center">
            <div v-for="i in 3" :key="i" class="w-33-ns ph3-ns ph2">
              <h2 class="f2-ns f3">Land Grab U</h2>
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
              <p class="h4">{{ ipsum.generateParagraphs(1) }}</p>
            </div>
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
export default {
  name: "Landing",
  components: {
    Home,
    Footer,
  },
  data() {
    return {
      homeActive: true,
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        // anchors: [
        //   "Home",
        //   "Maps",
        //   "Mission",
        //   "Timelines",
        //   "Nations",
        //   "Objectives",
        //   "Initiatives",
        // ],
        sectionsColor: [
          "#FEFCF5",
          "#000000",
          "#FEFCF5",
          "#AA4F37",
          "#82b8b3",
          "#82b8b3",
          "#FEFCF5",
        ],
        onLeave: this.showOrHideToTopButton,
      },
    };
  },
};
</script>