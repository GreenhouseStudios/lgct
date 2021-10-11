<template>
  <div class="section relative dark-gray flex flex-column justify-center">
    <home-button></home-button>
    <rounded-card :heading="'Thanks for visiting Land Grab CT'" id="card">
      <div>
        <p class="f2-ns f4 sans-serif mb0">Follow us on social media</p>
      </div>
      <div class="flex justify-start">
        <a href="https://twitter.com/LandGrabCT" class="ma3"
          ><i class="fa fa-2x fa-twitter blue"></i
        ></a>
        <a href="https://www.instagram.com/landgrabct/?hl=en" class="ma3"
          ><i class="fa fa-2x fa-instagram black"></i
        ></a>
      </div>
      <div>
        <a href="https://greenhousestudios.uconn.edu/"
          >https://greenhousestudios.uconn.edu/</a
        >
        <h3>© 2021 Greenhouse Studios</h3>
      </div>
    </rounded-card>
  </div>
</template>

<script>
import HomeButton from "./HomeButton.vue";
import RoundedCard from "./RoundedCard.vue";

export default {
  components: { HomeButton, RoundedCard },
};
</script>

<style lang="scss" scoped>
#card{
    height: 85vh;
}
</style>