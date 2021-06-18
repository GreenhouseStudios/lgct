<template>
  <div>
    <ToTopButton v-show="!homeActive"></ToTopButton>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Nav></Nav>
        <img
          :src="require('/src/assets/lgct-logo.png')"
          alt=""
          class="w-50 ma6"
        />
      </div>
      <div class="section">
        <div>
          <h1 class="f1 white pa5">Mapping the Impact</h1>
          <img class="fl" :src="require('/src/assets/map.png')" alt="" />
        </div>
      </div>
      <div class="section ph7 pv5">
        <p class="f1 ph6 mh5 lh-title i">
          Land Grab Connecticut is an initiative created by Greenhouse Studios
          at the University of Connecticut to recognize the weight and impact of
          Land Grant Universities, institutionalized by the Morrill Act of 1862,
          by highlighting the generational opportunity costs imposed on the
          Indigenous communities affected by land seizure.
        </p>
      </div>
      <div class="section">
        <div class="flex">
          <img class="w-50" :src="require('/src/assets/lgu-map.png')" alt="" />
          <div class="pa5">
            <router-link to="/timeline">
              <div class="flex flex-row justify-center grow">
                <h1 class="f1 white">The Timeline</h1>
                <!-- <circle-arrow></circle-arrow> -->
              </div>
            </router-link>
            <p class="f1 lh-title white">
              A very well written explanation on what the timeline details and
              what it aims to accomplish using this series of events, and how it
              ties into today.
            </p>
          </div>
        </div>
      </div>

      <div class="section" id="ind">
        <!-- <img
          class="z-0"
          :src="require('/src/assets/indigenous-peoples.png')"
          alt=""
        /> -->
        <div class="pa6">
          <span class="ma5 b--white flex flex-row grow">
            <h1 class="w-40 f-headline tl v-mid white">Indigenous Peoples</h1>
            <circle-arrow></circle-arrow>
          </span>
        </div>
      </div>

      <div class="section">
        <div class="pa7">
          <p class="f1 athelas lh-title">
            A very well written explanation on what the timeline details and
            what it aims to accomplish using this series of events, and how it
            ties into today.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="">
          <h1 class="f2 absolute tl ma5">Other Initiatives</h1>
        </div>
        <div class="pv7">
          <div class="flex items-center justify-center">
            <div v-for="i in 3" :key="i" class="w-33 h7 ph3">
              <h2>Land Grab U</h2>
              <div
                class="w5 h5 br-100 mv4 dib"
                style="background-color: #c5aa57"
              >
                <div
                  class="w5 h5 br-100"
                  style="
                    background-color: #232621;
                    transform: translate(5px, -5px);
                  "
                ></div>
              </div>
              <p class="">{{ ipsum.generateParagraphs(1) }}</p>
            </div>
            <!-- <img :src="require('/src/assets/initiatives.png')" alt="" /> -->
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import ipsum from '../ipsum.js'
import Nav from "./Nav";
export default {
  components: {
    Nav,
  },
  data() {
    return {
      homeActive: true,
      ipsum: ipsum,
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        menu: "#menu",
        anchors: [
          "Home",
          "Maps",
          "Mission",
          "Timelines",
          "Nations",
          "Objectives",
          "Initiatives",
        ],
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
  methods: {
    showOrHideToTopButton(origin, destination, direction) {
      console.log(origin);
      console.log(destination);
      console.log(direction);
      this.homeActive = destination.isFirst;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>