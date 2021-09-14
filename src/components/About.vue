<template>
  <div>
    <div class="section bg-lgct-white relative">
      <home-logo></home-logo>
      <header
        class="
          mw-25 mw-25-ns
          pa3
          pa5-ns
          flex flex-column
          h-100
          justify-center
          tl
        "
      >
        <h1 class="serif f-subheadline ph7">About Land Grab CT</h1>
        <p class="f3 ph7">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </header>
      <div
        class="bg-lgct-teal absolute bottom-0 right-0 w-100"
        style="height: 10vh"
      >
        <div
          id="curved-corner-bottomright"
          class="fr relative"
          style="top: -100px"
        ></div>
      </div>
    </div>
    <div class="section bg-lgct-teal white flex flex-row">
      <section class="w-50 pa4 lh-copy">
        <h1 class="w-50 center f3">{{ ipsum.generateParagraphs(1) }}</h1>
      </section>
      <section class="w-50 pa2">
        <ul class="list h-100 flex flex-column">
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 1</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 2</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 3</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
        </ul>
      </section>
    </div>

    <div class="section bg-lgct-red white serif fw3 pa5">
      <section class="tl mh5">
        <h1 class="f1">The Future of Land Grab</h1>
        <div class="sans-serif">
          <p class="f2">{{ ipsum.generateParagraphs(1) }}</p>
          <p class="f2">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
      </section>
    </div>

    <div class="section bg-lgct-white serif fw3 pa5">
      <section class="tl mh5">
        <h1 class="f1">The Future of Land Grab</h1>
        <div class="sans-serif">
          <p class="f2">{{ ipsum.generateParagraphs(1) }}</p>
          <p class="f2">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
      </section>
    </div>

    
    <div class="section bg-lgct-gold fw3">
      <section class="tl mh5">
        <h1 class="f1 serif ma0 pv4">The Team</h1>
        <div class="flex flex-wrap w-100 justify-between">
          <div v-for="i in 8" :key="i" class="ph4">
            <div
              class="ba br-100 overflow-hidden hide-child"
              style="
                background-image: url(../assets/Arrow.svg);
                height: 300px;
                width: 300px;
              "
            >
              <div class="child">
                <div class="w-100 bg-white pl4 pr3 pt5" style="height: 600px">
                  <p class="black">{{ ipsum.generateParagraphs(1) }}</p>
                </div>
              </div>
            </div>
            <div class="tc">
              <p class="f3 fw6 mb0">First and Last Name</p>
              <p class="i mt0">Titles and roles in Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>

     <div class="section bg-lgct-teal fw3">
      <section class="tl mh5 white">
        <h1 class="f1 serif ma0 pv4">Special Thanks To</h1>
        <div class="flex flex-wrap w-100 justify-between">
          <div v-for="i in 8" :key="i" class="ph4">
            <div
              class="ba br-100 overflow-hidden hide-child"
              style="
                background-image: url(../assets/Arrow.svg);
                height: 300px;
                width: 300px;
              "
            >
              <div class="child">
                <!-- <img src="../assets/Arrow-White.svg" alt=""> -->
                <div class="w-100 bg-white pl4 pr3 pt5" style="height: 600px">
                  <p class="black">{{ ipsum.generateParagraphs(1) }}</p>
                </div>
              </div>
            </div>
            <div class="tc">
              <p class="f3 fw6 mb0">First and Last Name</p>
              <p class="i mt0">Titles and roles in Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import HomeLogo from "./HomeLogo.vue"
export default {
  components: {
    HomeLogo,
  },
  name: "About",
  data() {
    return {
      ipsum: ipsum,
    };
  },
};
</script>

<style lang="scss" scoped>
.section {
  height: 100vh;
}
li {
  background-color: #459d96;
}
</style>