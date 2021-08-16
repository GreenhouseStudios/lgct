<template>
  <div class="z-0">
    <div
      class="absolute bottom-0 right-0 w-100"
      style="height: 10vh"
      :class="plankStyle"
    >
      <div
        v-if="!left"
        id="curved-corner-bottomright"
        class="fr relative"
        :class="curveStyle"
        style="top: -100px"
      ></div>
      <div
        v-else
        id="curved-corner-bottomleft"
        class="fl relative"
        :class="curveStyle"
        style="top: -100px"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: "red"
        },
        left: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        plankStyle() {
            return "bg-lgct-" + this.color;
        },
        curveStyle(){
            return "lgct-" + this.color;
        }
    },
};
</script>

<style lang="scss" scoped>
</style>