<template>
  <div>
    <nav class="dt-l border-box" style="width: 300px; position:fixed;">
      <ul v-if="navShow">
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
        <li @click="toggleNav"><i class="f1 fw6 white">&#8249;</i></li>
      </ul>
      <button  v-else class="bn f2 h3" style="width: 50px" @click="toggleNav"><i class="fa fa-bars white"></i></button>
    </nav>
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