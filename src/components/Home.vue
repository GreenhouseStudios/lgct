<template>
  <div class="section">
    <Nav></Nav>
    <img :src="require('/src/assets/lgct-logo.png')" class="w-50-ns w-70 ma6-ns mv7" />
  </div>
</template>

<script>
import Nav from './Nav'
export default {
    components: {
        Nav,
    },
};
</script>

<style lang="scss" scoped>
</style>