<template>
  <div>
    <div class="section bg-lgct-white relative">
      <home-logo></home-logo>
      <header
        class="
          mw-25 mw-25-ns
          pa3
          pa5-ns
          flex flex-column
          h-100
          justify-center
          tl
          mh5
        "
      >
        <h1 class="serif f-subheadline">About Land Grab CT</h1>
        <p class="f3">
          The Land Grab CT project is produced UConn’s Greenhouse Studios in conjunction 
          with the Native American Cultural Programs (NACP) and Native American and Indigenous 
          Students Association (NAISA), and the Dodd Impact initiative at the Human Rights Institute. 
        </p>
      </header>
      <div
        class="bg-lgct-teal absolute bottom-0 right-0 w-100"
        style="height: 10vh"
      >
        <div
          id="curved-corner-bottomright"
          class="fr"
          style="top: -100px; color: #54bab1;"
        ></div>
      </div>
    </div>
    <div class="goals section bg-lgct-teal white flex flex-row">
      <section class="goals w-50 pa4 lh-copy">
        <p class="goals w-75 center f4">
          The Land Grab CT project was inspired by the Land Grab U project, which extensively collected and mapped 
          land data tied to land-grant universities and the 1862 Morrill Act. Land Grab CT is a localization of the 
          data from this project, as well as an expansion of understanding land-grant institutions in  a larger 
          colonial context. We aim to contextualize the University of Connecticut’s place in the colonial system by 
          focusing on the acquisition and control of the land UConn currently resides on as well as the parcels of land 
          tied to UConn through the Morrill Act. This project is meant to inform viewers about UConn’s history and invite 
          them to interrogate their assumptions about the systems of higher education in America. 
        </p>
      </section>
      <section class="goals w-50 pa2">
        <ul class="list flex flex-column">
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 1</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 2</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
          <li class="w-75 h-25 pa3 ma2">
            <h1>Goal 3</h1>
            <p class="i f5-l">{{ ipsum.generateParagraphs(1) }}</p>
          </li>
        </ul>
      </section>
    </div>

    <div class="section bg-lgct-red white serif fw3 pa5">
      <section class="tl mh5">
        <h1 class="f1">The Future of Land Grab</h1>
        <div class="sans-serif">
          <p class="f3">The Land Grab CT team hopes to use the content created during this project to 
            help recenter UConn’s place as a land-grant university. By informing UConn affiliates and 
            building bridges with other land-grant institutions, we hope to add to a larger movement of 
            restorative justice built around a better understanding of the Morrill Act and subsequent 
            educational acts that accumulated land and wealth for white settlers, a legacy that is still 
            felt into the present day. We aim to foster conversations and dialogues and build networks to achieve these goals. 
          </p>
          <!-- <p class="f2">{{ ipsum.generateParagraphs(1) }}</p> -->
        </div>
      </section>
    </div>

    <div class="section bg-lgct-white serif fw3 pa5">
      <section class="tl mh5">
        <h1 class="f1">The Development of Land Grab</h1>
        <div class="sans-serif">
          <p class="f3">Land Grab CT initially began when team members Glenn Mitoma and Sage Phillips applied 
            for a grant with the intention of identifying land parcels from the Morrill Act that tied to the 
            University of Connecticut. The day after being awarded the grant, the <a href="http://landgrabu.org">Land Grab U</a> 
            project was published, which is a rigorously detailed project that traced the land parcels and money tied to 
            every Land-Grant University in the United States. It defined the Morrill Act based on land and wealth 
            accumulation and the violence backed treaties that helped create it. Because of its incredible depth, 
            Glenn and Sage began to pivot their goals to continue building off the work the LandGrabU team had done. 
          </p>
          <p class="f3">Soon, the project was brought to <a href="https://greenhousestudios.uconn.edu/">Greenhouse Studios</a> 
            for further development. After sessions brainstorming, consultation and collaboration, the current LandGrab CT 
            website began to take form. The team researched, synthesised information, formulated theses, and designed web layouts. 
            The goal was to create an interactive and engaging experience that educates viewers with a wider historical perspective 
            to encourage them to interrogate their assumptions about land grant universities and the education system as a whole. 
            </p>
        </div>
      </section>
    </div>

    
    <div class="section bg-lgct-gold fw3">
      <section class="tl mh5">
        <h1 class="f1 serif ma0 pv4">The Team</h1>
        <div class="flex flex-wrap w-100 justify-between">
          <div v-for="i in 8" :key="i" class="ph4">
            <div
              class="ba br-100 overflow-hidden hide-child"
              style="
                background-image: url(../assets/Arrow.svg);
                height: 300px;
                width: 300px;
              "
            >
              <div class="child">
                <div class="w-100 bg-white pl4 pr3 pt5" style="height: 600px">
                  <p class="black">{{ ipsum.generateParagraphs(1) }}</p>
                </div>
              </div>
            </div>
            <div class="tc">
              <p class="f3 fw6 mb0">First and Last Name</p>
              <p class="i mt0">Titles and roles in Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>

     <div class="section bg-lgct-teal fw3">
      <section class="tl mh5 white">
        <h1 class="f1 serif ma0 pv4">Special Thanks To</h1>
        <div class="flex flex-wrap w-100 justify-between">
          <div v-for="i in 8" :key="i" class="ph4">
            <div
              class="ba br-100 overflow-hidden hide-child"
              style="
                background-image: url(../assets/Arrow.svg);
                height: 300px;
                width: 300px;
              "
            >
              <div class="child">
                <!-- <img src="../assets/Arrow-White.svg" alt=""> -->
                <div class="w-100 bg-white pl4 pr3 pt5" style="height: 600px">
                  <p class="black">{{ ipsum.generateParagraphs(1) }}</p>
                </div>
              </div>
            </div>
            <div class="tc">
              <p class="f3 fw6 mb0">First and Last Name</p>
              <p class="i mt0">Titles and roles in Project</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
import HomeLogo from "../components/HomeLogo.vue"
export default {
  components: {
    HomeLogo,
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
li {
  background-color: #459d96;
  margin: 0.5rem auto;
}
a  { 
  display: inline;
  font-weight: bold;
  text-decoration: underline;
}
h1 {
  margin: 0em;
}
</style>