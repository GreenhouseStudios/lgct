<template>
  <div id="app">
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
      <div class="section">
        <p class="f1 pa6 mt6">
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
          <div>
            <h1 class="f1 white">The Timeline</h1>
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
          <span class="ma5 b--white flex grow">
            <h1 class="w-40 f-headline tl v-mid white">Indigenous Peoples</h1>
            <span class="w-30">
              <div
                class="h3 w3 br-100 ba b--white mt5"
                style="transform: translateY(25px)"
              >
                <h1
                  class="white f-headline fw1"
                  style="transform: translate(3px, -95px)"
                >
                  &rsaquo;
                </h1>
              </div>
            </span>
          </span>
        </div>
      </div>

      <div class="section">
        <div class="pa7">
          <p class="f1">
            A very well written explanation on what the timeline details and
            what it aims to accomplish using this series of events, and how it
            ties into today.
          </p>
        </div>
      </div>

      <div class="section">
        <div class="">
          <h1 class="f2 absolute tl ma5">Other Inititatives</h1>
        </div>
        <div class="pv7">
          <div class="flex items-center justify-center">
            <div class="w5 h5 br-100 ma5" style="background-color: #c5aa57">
              <div
                class="w5 h5 br-100"
                style="
                  background-color: #232621;
                  transform: translate(5px, -5px);
                "
              ></div>
            </div>
            <div class="w5 h5 br-100 ma5" style="background-color: #c5aa57">
              <div
                class="w5 h5 br-100"
                style="
                  background-color: #232621;
                  transform: translate(5px, -5px);
                "
              ></div>
            </div>
            <div class="w5 h5 br-100 ma5" style="background-color: #c5aa57">
              <div
                class="w5 h5 br-100"
                style="
                  background-color: #232621;
                  transform: translate(5px, -5px);
                "
              ></div>
            </div>
            <!-- <img :src="require('/src/assets/initiatives.png')" alt="" /> -->
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Nav from "./components/Nav";
export default {
  name: "App",
  components: {
    Nav,
  },
  data() {
    return {
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
        paddingTop: "0px",
        paddingBottom: "0px",
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#ind {
  background-image: url(../src/assets/indigenous-peoples.png);
  /* background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0 auto;
  height: 100vh;
  width: 100vw; */
}
</style>
