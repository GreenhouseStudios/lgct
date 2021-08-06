<template>
  <div>
    <div class="section bg-lgct-white relative">
      <router-link to="/">
        <img
          src="../assets/lgct-logo-long.png"
          alt="land grab connecticut logo long version"
          class="mw6-ns w4 absolute top-2 left-2"
        />
      </router-link>
      <header
        class="
          w-100
          mw-25-ns
          pa3
          pa5-ns
          flex flex-column
          h-100
          justify-center
          tl
        "
      >
        <h1 class="serif f-subheadline-ns f2 ph7-ns ph2 mb0">
          Activism and Resources
        </h1>
        <p class="f3 ph7-ns ph2 mt0">
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

    <div class="section bg-lgct-red pa5-ns pa4 flex justify-end-ns justify-center">
      <div
        class="br4 bg-lgct-white w-75 pv4 ph5 shadow-4 dn db-l"
        id="main-card"
      >
        <div
          class="bg-dark-gray white w-50 pa2 br4 fl ph5 shadow-4"
          id="title-card"
          style="position: relative; right: 10%"
        >
          <h1 class="serif f-subheadline-sn f2 mb0 mr0">Creating Change</h1>
          <p class="f3-ns f6">{{ ipsum.generateSentences(1) }}</p>
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

      <div class="flex flex-column dn-ns">
        <h1 class="serif white mb0">Creating Change</h1>
        <p class="black f6 fw7">{{ipsum.generateSentences(1)}}</p>
        <div class="br4 bg-lgct-white w-100 pv4 ph5-ns ph2 shadow-4">
          <div v-for="i in 4" :key="i" class="tl">
            <h1 class="f4 fw7">Heading 1</h1>
            <p class="f5 fw7 i">{{ipsum.generateSentences(2)}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section bg-lgct-gold fw3 pa5">
      <section>
        <div>
          <h1 class="f-subheadline-ns f1 serif mb0">Resources</h1>
          <div
            id="title-underline"
            class="center ma0 bg-white br-pill w-25-ns w5 h1"
          ></div>
        </div>
        <ul class="flex ma2 " id="resource-cards-container">
          <a href="https://landgrabu.org">
            <div
              v-for="i in 4"
              :key="i"
              id="card"
              class="ma3-ns ma1 w-25-ns w5 br4 bg-white overflow-hidden shadow-4"
              style="height: 450px"
            >
              <img
                :src="
                  'https://picsum.photos/id/' +
                  (Math.floor(Math.random() * 100) + i) +
                  '/700/450'
                "
                style="height: 85%"
              />
              <h2>{{ ipsum.generateWords(3) }}</h2>
            </div>
          </a>
        </ul>
        <div
          class="flex items-center justify-center"
          id="gallery-btns-container"
        >
          <button
            class="
              br-100
              bg-white
              w2
              h2
              f2
              grow
              flex
              bn
              justify-center
              items-center
            "
          >
            <svg
              class="w1"
              data-icon="chevronLeft"
              viewBox="0 0 32 32"
              style="fill: currentcolor"
            >
              <title>chevronLeft icon</title>
              <path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
            </svg>
          </button>
          <button
            v-for="j in 5"
            :key="j"
            class="w1 h1 bg-light-gray br-100 dib mh2 bn"
          ></button>
          <button
            class="
              br-100
              bg-white
              w2
              h2
              f2
              grow
              bn
              flex
              justify-center
              items-center
            "
          >
            <svg
              class="w1"
              data-icon="chevronRight"
              viewBox="0 0 32 32"
              style="fill: currentcolor"
            >
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
          </button>
        </div>
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
      resourceLinks: [
        {
          title: "",
          url: "https://landgrabu.org",
        },
        {
          title: "",
          url: "https://landgrabu.org",
        },
        {
          title: "",
          url: "https://landgrabu.org",
        },
        {
          title: "",
          url: "https://landgrabu.org",
        },
        {
          title: "",
          url: "https://landgrabu.org",
        },
      ],
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
  min-height: 100vh;
}
li {
  background-color: #459d96;
}
</style>