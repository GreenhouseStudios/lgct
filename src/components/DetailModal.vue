<template>
  <div v-if="showModal" class="fixed top-0 left-0 overlay bg-white pa6">
    <div class="h-25">
        <button @click="$emit('close-modal')" class="b f3 bn w3 h3 fixed top-1 right-1">X</button>
    </div>
    <div class="h-75 pa4">
      <h1 class="f-headline orange">Detail Modal</h1>
      <p v-for="n in 10" :key="n" class="ma3 pa3">{{ ipsum.generateParagraphs(1) }}</p>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      ipsum: ipsum,
    };
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
</style>