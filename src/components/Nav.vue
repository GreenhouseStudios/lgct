<template>
  <div>
    <nav class="db dt-l w-50 border-box pa3 mt3 right-0 absolute">
      <a
        class="f4 fw6 black link dim ma3"
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

<style scoped>
nav{
  /* position: absolute; */
  z-index: 999;
}
</style>