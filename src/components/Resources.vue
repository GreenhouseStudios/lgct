<template>
  <div>
    <div class="section bg-lgct-white relative">
      <router-link to="/">
        <img
          src="../assets/lgct-logo-long.png"
          alt="land grab connecticut logo long version"
          class="mw6 absolute top-2 left-2"
        />
      </router-link>
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
        <h1 class="serif f-subheadline ph7">Activism and Resources</h1>
        <p class="f3 ph7">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </header>
      <div
        class="bg-lgct-red absolute bottom-0 right-0 w-100"
        style="height: 10vh"
      >
        <div
          id="curved-corner-bottomright"
          class="fr relative lgct-red"
          style="top: -100px"
        ></div>
      </div>
    </div>

    <div class="section bg-lgct-red pa5 flex justify-end">
      <div class="br4 bg-lgct-white w-75 pv4 ph5 shadow-4">
        <div
          class="bg-dark-gray white w-50 pa2 br4 fl ph5 shadow-4"
          style="position: relative; right: 10%"
        >
          <h1 class="serif f-subheadline">Creating Change</h1>
          <p class="f3">{{ ipsum.generateSentences(1) }}</p>
        </div>
        <div class="mb5 tl pa2">
          <h2>Heading Sample</h2>
          <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
        <div class="mb5 tl pa2">
          <h2>Heading Sample</h2>
          <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
        <div class="mb5 tl pa2">
          <h2>Heading Sample</h2>
          <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
        <div class="mb5 tl pa2">
          <h2>Heading Sample</h2>
          <p class="f3 i fw1">{{ ipsum.generateParagraphs(1) }}</p>
        </div>
      </div>
    </div>

    <div class="section bg-lgct-gold fw3 pa5">
      <section>
        <div>
          <h1 class="f-subheadline serif mb0">Resources</h1>
          <div class="center ma0 bg-white br-pill w-25 h1"></div>
        </div>
        <div class="flex ma2">
          <div
            v-for="i in 4"
            :key="i"
            class="ma3 w-25 br4 bg-white overflow-hidden"
            style="height: 450px"
          >
            <img
              :src="
                'https://picsum.photos/id/' +
                (Math.floor(Math.random() * 100) +
                i )+
                '/700/400'
              "
            />
            <h2>landgrabu.com</h2>
            <!-- <picture class="relative">
              <source src="../assets/indigenous-peoples.png">
              <img src="../assets/indigenous-peoples.png" alt="">
            </picture> -->
          </div>
        </div>
        <div class="br-100 bg-white w3 h3 f1 grow dib">&#x2190;</div>
        <div v-for="j in 4" :key="j" class="w2 h2 bg-light-gray br-100 dib mh2"></div>
        <div class="br-100 bg-white w3 h3 f1 grow dib">&#8594;</div>
      </section>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";

export default {
  name: "Resources",
  data() {
    return {
      ipsum: ipsum,
    };
  },
  computed: {
    randomNum() {
      return 3;
    },
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