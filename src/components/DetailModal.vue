<template>
  <transition name="fade">
    <div v-if="showModal && card" class="fixed overlay flex items-center justify-center pa4 z-2">
      <div class="bg-white m3 br4 relative mw-50-l z-4 h-100 top-0 bottom-0" v-click-outside="handleClickOutside">
        <div class="f1 bn absolute top-1 right-1 br-100">
          <button @click="$emit('close-modal')" class="br-100 w3 h3 flex items-center pl2 bn bg-moon-gray">
            <!-- <i class="fa fa-times"></i> -->
            <i class="fa fa-chevron-left"></i>
          </button>
        </div>
        <div class="pa4 flex flex-column items-start tl h-100">
          <h1 class="f1 lgct-red">{{ card.heading }}</h1>
          <div class="ma3 pv3 lh-copy f4 h-80 overflow-auto bg-light-gray pa3 br4">
            <p
              v-if="card.body"
              v-html="blocksToHTML({ blocks: card.body })"
            ></p>
            <p v-else>
              {{ ipsum.generateParagraphs(1) }}
            </p>
          </div>
          <div v-if="card.citations">
            <h3>Citations</h3>
            <p
              v-if="card.fullBody"
              class="ma3 pv3 w-30-ns"
              v-html="blocksToHTML({ blocks: card.citations })"
            ></p>
          </div>
        </div>
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
    },
  },
  data() {
    return {
      ipsum: ipsum,
      blocksToHTML: require("@sanity/block-content-to-html"),
      justToggled: true,
    };
  },
  computed: {
    blockChildren() {
      return this.body.map((x) => x.children).filter((x) => x.text !== "\n");
    },
  },
  methods: {
    handleClickOutside() {
      console.log("click outside")
      if(this.showModal){
        this.$emit('close-modal')
      } 
    }
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
  overflow-y: scroll;
  background-color: rgba(50, 50, 50, 0.9);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a{
  color: #70b9b2;
}
</style>