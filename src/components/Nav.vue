<template>
  <div >
    <nav class="dt-l border-box" style="position:fixed;" >
      <ul v-if="navShow" v-click-outside="handleClickOutside">
        <li
          @click="move(index)"
          class="tl"
          v-for="(item, index) in navItems"
          :key="item"
        >
          <a>
            {{ item }}
          </a>
        </li>
        <!-- <li @click="toggleNav"><i class="f1 fw6 white">&#8249;</i></li> -->
      </ul>
      <button v-else class="bn f2 h3 w3 " @click="toggleNav"><i class="fa fa-bars"></i></button>
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
        "Objectives",
        "Map the Impact",
        "National Timeline",
        "CT Timeline",
        "Parcels",
        "About",
      ],
      navShow: false,
      justToggled: false,
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
      this.justToggled = true;
    },
    handleClickOutside(){
      if(this.navShow && !this.justToggled){
        this.navShow = false;
      } 
      this.justToggled = false;
    },
    move(index){
      this.fp.moveTo(index + 1)
      this.toggleNav();
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
  font-weight: 1000;
}
button{
  background-color: rgba(0, 0, 0, 0);
}
button > i{
 color:#363839;
}
</style>