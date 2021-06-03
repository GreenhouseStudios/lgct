<template>
  <div>
    <nav class="db dt-l w-100 border-box pa3 ph5-l">
      <a
        class="f4 fw6 black link dim ma5"
        v-for="item in navItems"
        :key="item"
        href="/"
        >{{ item }}</a
      >
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        "Home",
        "Maps",
        "Timelines",
        "Indigenous Peoples",
        "About",
        "Resources",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>