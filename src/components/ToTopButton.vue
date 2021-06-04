<template>
  <button
    @click="toTop"
    class="br4 bn bg-grey w3 h3 fixed bottom-2 right-2 z-1"
  >
    <i class="f1">&#x2191;</i>
  </button>
</template>

<script>
export default {
    methods: {
        toTop() {
            this.fp.moveTo(1)
        }
    },
  computed: {
    fp() {
      return window.fullpage_api;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>