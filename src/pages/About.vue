<template>
  <div>
    <div class="section bg-lgct-white relative">
      <home-logo></home-logo>
      <div class="flex justify-start w-100 h-75 tr">
        <rounded-card
          :isTitle="true"
          :heading="'About Land Grab CT'"
          style="height: 70vh; width: 90vw"
        ></rounded-card>
      </div>
      <curved-border :color="'teal'" :tall="true"></curved-border>
    </div>
    <div class="section relative bg-lgct-teal">
      <section class="pa2 lh-copy tl">
        <!-- <p class="goals w-75 center f3-ns f4">
         The Land Grab CT project is produced UConn’s Greenhouse Studios in
          conjunction with the Native American Cultural Programs (NACP) and
          Native American and Indigenous Students Association (NAISA), and the
          Dodd Impact initiative at the Human Rights Institute.
        </p>
        <p class="goals w-75 center f3-ns f4">
          The Land Grab CT project was inspired by the Land Grab U project,
          which extensively collected and mapped land data tied to land-grant
          universities and the 1862 Morrill Act. Land Grab CT is a localization
          of the data from this project, as well as an expansion of
          understanding land-grant institutions in a larger colonial context. We
          aim to contextualize the University of Connecticut’s place in the
          colonial system by focusing on the acquisition and control of the land
          UConn currently resides on as well as the parcels of land tied to
          UConn through the Morrill Act. This project is meant to inform viewers
          about UConn’s history and invite them to interrogate their assumptions
          about the systems of higher education in America.
        </p> -->
        <stacked-card class="center">
          <template v-slot:heading>About Land Grab CT</template>
          <p class="black">
            The Land Grab CT project is produced UConn’s Greenhouse Studios in
            conjunction with the Native American Cultural Programs (NACP) and
            Native American and Indigenous Students Association (NAISA), and the
            Dodd Impact initiative at the Human Rights Institute.
          </p>
          <p class="black">
            The Land Grab CT project was inspired by the Land Grab U project,
            which extensively collected and mapped land data tied to land-grant
            universities and the 1862 Morrill Act. Land Grab CT is a
            localization of the data from this project, as well as an expansion
            of understanding land-grant institutions in a larger colonial
            context. We aim to contextualize the University of Connecticut’s
            place in the colonial system by focusing on the acquisition and
            control of the land UConn currently resides on as well as the
            parcels of land tied to UConn through the Morrill Act. This project
            is meant to inform viewers about UConn’s history and invite them to
            interrogate their assumptions about the systems of higher education
            in America.
          </p></stacked-card
        >
      </section>
      <curved-border :color="'red'" :left="true"></curved-border>
    </div>

    <div class="section relative bg-lgct-red white serif fw3 pa5-l">
      <stacked-card class="center">
        <template v-slot:heading>The Future of Land Grab</template>
        <p class="f3 black">
          The Land Grab CT team hopes to use the content created during this
          project to help recenter UConn’s place as a land-grant university. By
          informing UConn affiliates and building bridges with other land-grant
          institutions, we hope to add to a larger movement of restorative
          justice built around a better understanding of the Morrill Act and
          subsequent educational acts that accumulated land and wealth for white
          settlers, a legacy that is still felt into the present day. We aim to
          foster conversations and dialogues and build networks to achieve these
          goals.
        </p></stacked-card
      >
      <curved-border :color="'white'"></curved-border>
    </div>

    <div class="section relative bg-lgct-white serif white fw3 pa5-l">
      <stacked-card class="center" mainColor="bg-lgct-teal" headColor="bg-moon-gray">
        <template v-slot:heading><span class="black ">The Development of Land Grab</span></template>
        <p class="f3">
          Land Grab CT initially began when team members Glenn Mitoma and Sage
          Phillips applied for a grant with the intention of identifying land
          parcels from the Morrill Act that tied to the University of
          Connecticut. The day after being awarded the grant, the
          <a href="http://landgrabu.org">Land Grab U</a>
          project was published, which is a rigorously detailed project that
          traced the land parcels and money tied to every Land-Grant University
          in the United States. It defined the Morrill Act based on land and
          wealth accumulation and the violence backed treaties that helped
          create it. Because of its incredible depth, Glenn and Sage began to
          pivot their goals to continue building off the work the LandGrabU team
          had done.
        </p>
        <p class="f3">
          Soon, the project was brought to
          <a href="https://greenhousestudios.uconn.edu/">Greenhouse Studios</a>
          for further development. After sessions brainstorming, consultation
          and collaboration, the current LandGrab CT website began to take form.
          The team researched, synthesised information, formulated theses, and
          designed web layouts. The goal was to create an interactive and
          engaging experience that educates viewers with a wider historical
          perspective to encourage them to interrogate their assumptions about
          land grant universities and the education system as a whole.
        </p></stacked-card
      >
      <curved-border :color="'gold'" :left="true"></curved-border>
    </div>

    <profile></profile>

    <div class="section relative bg-lgct-teal fw3">
      <stacked-card-horizontal>
        <template v-slot:heading>Special Thanks</template>
        <table class="list f2-ns f6 db lh-copy">
          <li>Tristan Ahtone and Bobby Lee: Land Grab U</li>
          <li>
            Jiff Martin: Sustainable Food System Educator, UConn
            Extension
          </li>
          <li>Steven Gavazzi: The Ohio State University</li>
          <li>Shaquanna Sebastian, Kiara Ruesta-Cayetano: UConn NACP</li>
          <li>Mike Stanton: UConn Journalism</li>
          <li>Christopher Clark: UConn History Department</li>
        </table>
      </stacked-card-horizontal>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import HomeLogo from "../components/HomeLogo.vue";
import Profile from "../components/Profile.vue";
import CurvedBorder from "../components/CurvedBorder.vue";
import RoundedCard from "../components/RoundedCard.vue";
import StackedCard from "../components/StackedCard.vue";
import StackedCardHorizontal from "../components/StackedCardHorizontal.vue";
export default {
  components: {
    HomeLogo,
    Profile,
    CurvedBorder,
    RoundedCard,
    StackedCard,
    StackedCardHorizontal,
  },
  name: "About",
  data() {
    return {
      ipsum: ipsum,
    };
  },
};
</script>

<style lang="scss" scoped>
@media screen and (min-width: 600px) {
  .goals {
    flex-direction: row !important;
  }
}
@media screen and (max-width: 600px) {
  h1 {
    font-size: 10vw;
  }
  p {
    font-size: 5vw;
  }
  header {
    margin: 0;
  }
  section {
    margin: 0;
  }
  .goals {
    width: 100%;
    flex-direction: column;
    font-size: 5vw;
  }
}
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}
ul {
  padding: 0px;
}
a {
  display: inline;
  font-weight: bold;
  text-decoration: underline;
}
h1 {
  margin: 0em;
}
</style>