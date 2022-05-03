<template>
  <div
  >
    <router-link
      :to="buttonLink"
      style="text-decoration: none; color: inherit"
    >
      <button class="w3 h3 w4-l h4-l w3-m h3-m bg-moon-gray br-100 bn grow shadow-4" :style="{ backgroundColor: this.btnColor }">
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