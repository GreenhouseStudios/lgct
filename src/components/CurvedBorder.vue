<template>
  <div
    class="absolute bottom-0 right-0 w-100 shadow"
    style="height: 30px;"
    :class="plankStyle"
  >
    <div v-if="!left">
      <div
        id="curved-corner-bottomright"
        class="fr relative"
        :class="curveStyle"
        style="top: -100px"
      ></div>
    </div>
    <div v-else>
      <div
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
      default: "red",
    },
    left: {
      type: Boolean,
      default: false,
    },
    tall: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    plankStyle() {
      return "bg-lgct-" + this.color + (this.tall ? " pb6" : "");
    },
    curveStyle() {
      return "lgct-" + this.color + (this.tall ? " mb7" : "");
    },
  },
};
</script>

<style lang="scss" scoped>
.tall {
  height: 10vh;
}
.shadow {
  box-shadow: 0 -5px 20px rgba(80, 80, 80, 0.6);
}
</style>