<template>
  <div>
    <nav class="db-ns dn dt-l w-60 border-box pa3 mt3 right-0 absolute">
      <a
        @click="fp.moveTo(index + 1)"
        class="f4 fw6 black link dim ma3"
        v-for="(item, index) in navItems"
        :key="item"
        >{{ item }}</a
      >
    </nav>
    <div class="relative">
      <div class="absolute top-0 left-0 w-100" v-show="navShow">
        <div class="h3 f2 flex items-center justify-center fw5 shadow-5 relative top--1" :class="btnColors[index]" v-for="(item,index) in navItems"
        :key="item" @click="moveMobile(index+1)"> {{item}}</div>
      </div>
      <div class="absolute vh-100 w-100">
        <a @click="navShow = !navShow" class="dn-ns f1 absolute bottom-0 h3 dim grow">
          <svg viewbox="0 0 100 100">
            <rect x="10" y="10" width="10%" height="1%"></rect>
            <rect x="10" y="20" width="10%" height="1%"></rect>
            <rect x="10" y="30" width="10%" height="1%"></rect>
          </svg>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Nav",
      navItems: [
        "Home",
        "Morrill Act",
        "Map the Impact",
        "Mission",
        "Timelines",
        "Assumption vs Truth",
        "Cultural Involvement",
        "Resources",
        "About",
      ],
      btnColors: ['bg-hot-pink z-5','bg-blue z-4', 'bg-pink z-3', 'bg-green z-2', 'bg-yellow z-1', 'bg-silver z-0'],
      navShow: false,
    };
  },
  mounted() {
    // console.log(this.$refs);
  },
  methods: {
    moveMobile(index) {
      this.navShow = false;
      this.fp.moveTo(index + 1);
      
    }
  },
  computed: {
    fp() {
      return window.fullpage_api;
    },
  },
};
</script>

<style scoped>
nav {
  /* position: absolute; */
  z-index: 999;
}
</style>