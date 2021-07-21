<template>
  <div>
    <nav class="db-ns dn dt-l w-10 border-box pa3 mt3 right-0 absolute">
      <a @click="$router.push('/')" class="f4 fw6 black link dim ma3">Home</a>
    </nav>
    <div class="pa5 flex flex-column items-center">
      <h1>Land Grab - Glossary</h1>
      <div class="pa3 w-30" v-for="word in wordList" :key="word">
        <b>{{ word.word }}</b
        >: {{ word.definition }}
      </div>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import axios from "axios";
export default {
  data() {
    return {
      wordList: [
        { word: "Indigenous Peoples", definition: ipsum.generateParagraphs(1) },
        { word: "Sovereignty", definition: ipsum.generateParagraphs(1) },
        { word: "Territories", definition: ipsum.generateParagraphs(1) },
        {
          word: "Northwest Territory",
          definition: ipsum.generateParagraphs(1),
        },
      ],
    };
  },
  mounted() {
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
          $vm.wordList.push( {
           word: result[0].word,
           definition: result[0].definition
          });
        }
      });
  },
};
</script>

<style lang="scss" scoped>
</style>