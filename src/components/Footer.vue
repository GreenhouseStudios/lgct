<template>
  <div class="section relative dark-gray flex flex-column justify-center pa5-ns pa2-m">
    <stacked-card-horizontal :heading="'Thanks for visiting Land Grab CT'" id="card" class="mv6-l mv5">
      <template v-slot:heading><span class="white">Thanks for visiting Land Grab CT</span></template>
      <div style="padding-left: 32px;">
        <div>
          <p class="f2-ns f3 sans-serif mb0">Follow us on social media</p>
        </div>
        <div class="flex justify-start">
          <a href="https://twitter.com/LandGrabCT" target="_blank" class="ma3"
            ><i class="fa fa-2x fa-twitter blue"></i
          ></a>
          <a href="https://www.instagram.com/landgrabct/?hl=en" target="_blank" class="ma3"
            ><i class="fa fa-2x fa-instagram black"></i
          ></a>
            <a href="https://greenhousestudios.uconn.edu/" target="_blank" style="width: auto; height: auto; max-width: 70px; max-height: 70px; padding: 5px;">
            <img src="../../public/GS-Full-Brackets-Green-Black.png"/>
          </a>
        </div>
       
        <div style="">
         
          <p class="copyright">© 2021 - {{new Date().getFullYear()}} Greenhouse Studios</p>
          <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" />
          </a>
          This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>
        </div>
      </div>
    </stacked-card-horizontal>
  </div>
</template>

<script>
import StackedCardHorizontal from './StackedCardHorizontal.vue';

export default {
  components: { StackedCardHorizontal },
};
</script>

<style lang="scss" scoped>
#card{
    height: 85vh;
}
</style>