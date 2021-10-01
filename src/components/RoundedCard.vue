<template>
  <div class="h-100 relative">
    <div
      class="tl pa4-l pa2 relative h-75 shadow-4 right-0"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      v-if="img !== ''"
      id="round-card"
    >
      <div class="flex items-center h-100">
        <div>
          <h1 id="heading-title-version" class="f-headline-l f1" v-if="isTitle">{{ heading }}</h1>
          <h1 class="f1-l f3 mt5" v-else>{{ heading }}</h1>

          <p class="i fw5 f3-l f6-m f6 lh-copy" v-if="!isTitle">
            <slot></slot>
          </p>
        </div>
        <div v-show="buttonurl" class="ma3 fr flex items-center">
          <link-button
              :buttonLink="buttonurl"
              :btnColor="buttoncolor"
          ></link-button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="tl pa4-l pa2 relative h-75 left-0 shadow-4"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      id="round-card"
    >
      <h1 class="f-headline-l f1" v-if="isTitle">{{ heading }}</h1>
      <h1 class="f1-l f3 mt5" v-else>{{ heading }}</h1>

      <p class="i fw5 f3-l f6-m f6 lh-copy" v-if="!isTitle">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import LinkButton from "../components/LinkButton.vue";
export default {
  components: {
    LinkButton,
  },
  props: {
    flip: {
      type: Boolean,
      default: false,
    },
 
    heading: {
      type: String,
      default: "National Timeline",
    },
    isTitle: {
      type: Boolean,
      default: false,
    },
    img: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default:"#e0ddd5"
    },
    buttonurl: {
      type: String,
      default: ""
    },
    buttoncolor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      body: ipsum.generateSentences(10),
      ipsum: ipsum,
    };
  },
  computed: {
    isFlipped() {
      return this.flip
        ? "container-flipped pl6-l "
        : "pl7-l pr6-l container ";
    },
    isFlippedHeading() {
      return this.flip ? "tr" : "tl";
    },
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .container {
    width: 80%;
    position: relative;
    top: 13%;
    left: 0%;
    border-radius: 0 500px 500px 0;
    z-index: 1;
  }
  .container-flipped {
    width: 80%;
    right: 0%;
    top: 13%;
    border-radius: 500px 0 0 500px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
}
@media screen and (max-width: 600px) {
  .container {
    padding-right: 30%;
    border-radius: 0 300px 300px 0;
    z-index: 1;
    height: 90%;
  }
  .container-flipped {
    border-radius: 300px 0 0 300px;
    float: right;
    z-index: 1;
    padding-left: 30%;
    height: 90%;
  }
}
#round-card {
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
  display: table;
  overflow: hidden;
}
.f-headline-l {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
</style>