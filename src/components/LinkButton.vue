<template>
  <div
  >
    <router-link
      :to="buttonLink"
      style="text-decoration: none; color: inherit"
    >
      <button class="w4 h4 bg-moon-gray br-100 bn grow shadow-4" :style="{ backgroundColor: this.btnColor }">
        <i class="white fa fa-2x fa-chevron-right"></i>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    buttonLink: {
      type: String,
    },
    btnColor: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
</style>