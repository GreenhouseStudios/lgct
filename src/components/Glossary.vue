<template>
  <div>
    <nav class="db-ns dn dt-l w-10 border-box pa3 mt3 right-0 absolute">
      <a @click="$router.push('/')" class="f4 fw6 black link dim ma3">Home</a>
    </nav>
    <div class="pa5 flex flex-column items-center">
      <h1>Land Grab - Glossary</h1>
      <ul class="list pl0 w-30">
        <li class="pa3" v-for="word in wordList" :key="word.word">
          <b>{{ word.word }}</b
          >: {{ word.definition }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ipsum from "../ipsum.js";
import axios from "axios";
import { gsap } from "gsap";
export default {
  data() {
    return {
      wordList: [],
    };
  },
  methods: {
    getCardContent() {
      const $vm = this;
      this.cards = [];
      axios
        .get(
          `https://hl710q4f.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22word%22%5D%20%7B%0A%20%20word%2C%20definition%0A%7D`
        )
        .then(function (response) {
          const result = response.data.result;
          console.log(result);
          for (let i = 0; i < result.length; i++) {
            $vm.wordList.push({
              word: result[i].word,
              definition: result[i].definition,
            });
          }
        });
    },
  },
  mounted() {
    this.getCardContent();
  },
  updated() {
    gsap.from("nav", { opacity: 0, duration: 2 });
    gsap.from("li", { opacity: 0, duration: 2, stagger: 1 });
  },
};
</script>

<style lang="scss" scoped>
</style>