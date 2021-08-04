<template>
  <transition name="fade">
    <div v-if="showModal" class="fixed top-0 left-0 overlay bg-white">
      <div>
        <button
          @click="$emit('close-modal')"
          class="b f3 bn w3 h3 fixed top-1 right-1"
        >
          X
        </button>
      </div>
      <div class="pa4 flex flex-column items-center">
        <h1 class="f-headline-ns">Detail Modal</h1>
        <p v-if="card.fullBody" class="ma3 pv3 w-30-ns" v-html="blocksToHTML({ blocks: card.fullBody })"></p>
         <p v-else class="ma3 pv3 w-30-ns">
          {{ ipsum.generateParagraphs(1) }}
        </p>

        <h3>Citations</h3>
        <p v-if="card.fullBody" class="ma3 pv3 w-30-ns" v-html="blocksToHTML({ blocks: card.citations })"></p>
      </div>
    </div>
  </transition>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    card: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      ipsum: ipsum,
      blocksToHTML: require("@sanity/block-content-to-html"),
    };
  },
  computed: {
    blockChildren() {
      return this.body.map((x) => x.children).filter((x) => x.text !== "\n");
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  //   background-image: linear-gradient(transparent 50vh, #fff 0, #fff);
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  //   transition: transform 0.8s cubic-bezier(0, 0.7, 0.4, 1),
  //     visibility 0s cubic-bezier(0, 0.7, 0.4, 1) 0.8s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>