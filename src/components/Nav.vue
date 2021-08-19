<template>
  <div>
    <nav class="dt-l border-box left-0 top-0 absolute" style="width: 300px" v-if="navShow">
      <ul>
        <li
          @click="fp.moveTo(index + 1)"
          class="tl"
          v-for="(item, index) in navItems"
          :key="item"
        >
          <a>
            {{ item }}
          </a>
        </li>
        <li @click="toggleNav"><icon class="f1 fw6 white">&#8249;</icon></li>
      </ul>
    </nav>
    <div v-else class="h-100">
    <button class="dt-l border-box left-0 absolute bn f2" @click="toggleNav"><i class="fa fa-bars white"></i></button>
    </div>
    <!-- <div class="relative">
      <div class="absolute top-0 left-0 w-100" v-show="navShow">
        <div
          class="
            h3
            f2
            flex
            items-center
            justify-center
            fw5
            shadow-5
            relative
            top--1
          "
          :class="btnColors[index]"
          v-for="(item, index) in navItems"
          :key="item"
          @click="moveMobile(index + 1)"
        >
          {{ item }}
        </div>
      </div>
      <div class="absolute vh-100 w-100">
        <a
          @click="navShow = !navShow"
          class="dn-ns f1 absolute bottom-0 h3 dim grow"
        >
          <svg viewbox="0 0 100 100">
            <rect x="10" y="10" width="10%" height="1%"></rect>
            <rect x="10" y="20" width="10%" height="1%"></rect>
            <rect x="10" y="30" width="10%" height="1%"></rect>
          </svg>
        </a>
      </div>
    </div> -->
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
      btnColors: [
        "bg-hot-pink z-5",
        "bg-blue z-4",
        "bg-pink z-3",
        "bg-green z-2",
        "bg-yellow z-1",
        "bg-silver z-0",
      ],
      navShow: true,
    };
  },
  mounted() {
    // console.log(this.$refs);
  },
  methods: {
    moveMobile(index) {
      this.navShow = false;
      this.fp.moveTo(index + 1);
    },
    toggleNav(){
      this.navShow = !this.navShow;
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
  overflow: hidden;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 10% 0;
  background-image: linear-gradient(#a9d6d2, #70b9b2);
  border-radius: 0 0 90px 0;
  overflow: hidden;
}
li a {
  display: block;
  padding:15px;
  padding-left:40px;
  font-family:frank ruhl libre, georgia, serif;
  font-size:24px;
  text-decoration:none;
  color:#fffbf1;
  transition:.2s;
}

li a:hover {
  background-color:#4d9ba3;
  font-size:26px;
}
button{
  background-color: #70b9b2;
}
</style>