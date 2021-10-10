<template>
  <div class="h-100 relative flex-center"
  v-bind:class="{ 'flex-center': isTitle }">
    <div
      class="dn-l dn-m dt tl pa3 relative h-10 shadow-4 right-0 mt3 mb3"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      id="round-card"
      v-if="isTitle"
    >
      <div class="flex items-center h-100">
        <h1 id="heading-title-version" class="f-headline-l f1">{{ heading }}</h1>
        <div v-show="buttonurl" class="ml2 mr2 fr flex items-center">
          <link-button
              :buttonLink="buttonurl"
              :btnColor="buttoncolor"
          ></link-button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="dn-l dn-m dt tl ph3 relative h-10 shadow-4 right-0 mt3 mb3"
      :class="isFlipped"
      :style="{ backgroundColor: this.bgColor }"
      id="round-card"
    >
      <div class="flex items-center h-100">
        <h1 class="f3">{{ heading }}</h1>
        <div v-show="buttonurl" class="ml2 mr2 fr flex items-center">
          <link-button
              :buttonLink="buttonurl"
              :btnColor="buttoncolor"
          ></link-button>
        </div>
      </div>
    </div>
    <div
      class="dn-l dn-m dt tl pa3 relative h-75 shadow-4 right-0"
      :class="isFlipped"
      :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
      v-show="!isTitle"
      id="round-card"
    >
      <div class="flex items-center h-100" style="justify-content: space-around;">
        <div>
          <p class="i fw5 f6 pr5-m lh-copy" v-if="!isTitle">
            <slot></slot>
          </p>
        </div>
      </div>
    </div>
    
    
      <div
        class="dt-l dt-m dn tl pa4-l pa3 relative h-75 w-100-m w-90-l shadow-4 right-0"
        :class="isFlipped"
        :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
        v-if="img !== ''"
        id="round-card"
      >
        <div class="flex items-center h-100">
          <div>
            <h1 id="heading-title-version" class="f-headline-l f1" v-if="isTitle">{{ heading }}</h1>
            <h1 class="f1-l f3" v-else>{{ heading }}</h1>

            <p class="i fw5 f5-l f6-m f6 pr5-m lh-copy" v-if="!isTitle">
              <slot></slot>
            </p>
          </div>
          <div v-show="this.flip" class="ma3 fr flex items-center">
            <link-button
                :buttonLink="buttonurl"
                :btnColor="buttoncolor"
            ></link-button>
          </div>
        </div>
      </div>
      <div
        v-else
        class="dt-l dt-m dn tl pa4-l pa3 relative h-75 w-100-m w-90-l left-0 shadow-4"
        :class="isFlipped"
        :style="{ backgroundImage: 'url(' + img + ')', backgroundColor: this.bgColor }"
        id="round-card"
      >
        <h1 class="f-headline-l f1" v-if="isTitle">{{ heading }}</h1>
        <h1 class="f1-l f3" v-else>{{ heading }}</h1>

        <p class="i fw5 f5-l f6-m f6 lh-copy" v-if="!isTitle">
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
        : "pr6-l container ";
    },
    isFlippedHeading() {
      return this.flip ? "tr" : "tl";
    },
  },
};
</script>

<style lang="scss" scoped>
#round-card {
  background-repeat: no-repeat;
  background-size: 65%;
  background-position: center;
  overflow: hidden;
}
@media screen and (min-width: 600px) {
  .container {
    position: relative;
    top: 13%;
    left: 0%;
    border-radius: 0 500px 500px 0;
    z-index: 1;
  }
  .container-flipped {
    right: 0%;
    top: 13%;
    border-radius: 500px 0 0 500px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
}
@media screen and (max-width: 600px) and (min-width: 480px) {
  .container {
    border-radius: 0 150px 150px 0;
    z-index: 1;
  }
  .container-flipped {
    border-radius: 150px 0 0 150px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
  .flex-center{
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 479px) {
  .container {
    padding-right: 15%;
    border-radius: 0 100px 100px 0;
    z-index: 1;
  }
  .container-flipped {
    border-radius: 100px 0 0 100px;
    float: right;
    z-index: 1;
    padding-left: 15%;
  }
  .flex-center{
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;
  }
  #round-card {
  background-size: 90%;
}
}

.f-headline-l {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
</style>