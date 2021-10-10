<template>
  <div class="section relative bg-lgct-gold pa0-ns pa2">
    <div class="h-100 flex items-center justify-between" id="largescreen">
      <button
        @click="changeIndex(-1)"
        class="w3 h3 bg-moon-gray br-100 bn grow shadow-4 absolute left-2"
        :style="{ backgroundColor: this.btnColor }"
      >
        <i class="white fa fa-2x fa-chevron-left"></i>
      </button>
      <div id="text-card" class="shadow-2 bg-light-gray pa6 mr6 fl w-60 h-80">
        <h1 class="f1 tl">{{ currentPerson.name }}</h1>
        <div class="flex">
          <p class="f3 tl lh-copy ml4">{{ currentPerson.bio }}</p>
        </div>
      </div>
      <div
        id="profile-image"
        class="shadow-3 bg-lgct-white w5 fl mr6"
        :style="
          'background-image: url(' +
          currentPerson.img +
          '); background-size:' + currentPerson.imgSize
        "
      ></div>
      <button
        @click="changeIndex(1)"
        class="w3 h3 bg-moon-gray br-100 bn grow shadow-4 right-2 absolute"
        :style="{ backgroundColor: this.btnColor }"
      >
        <i class="white fa fa-2x fa-chevron-right"></i>
      </button>
    </div>
    <div id="smallscreen">
      <div class="flex flex-column">
        <div class="f6 bg-light-gray br3 shadow-2 mb2">
          <h1>{{ currentPerson.name }}</h1>
        </div>
        <div class="bg-light-gray br4 pa1 ph2 shadow-2">
          <img :src="currentPerson.img" alt="image of team member" />
          <p>{{ currentPerson.bio }}</p>
        </div>
      </div>
      <div class="flex w-100 absolute bottom-2 center">
        <button
          @click="changeIndex(-1)"
          class="w2 h2 bg-moon-gray br-100 bn grow shadow-4 mh2"
          :style="{ backgroundColor: this.btnColor }"
        >
          <i class="white fa fa-chevron-left"></i>
        </button>
        <span class="w-two-thirds"></span>
        <button
          @click="changeIndex(1)"
          class="w2 h2 bg-moon-gray br-100 bn grow shadow-4 m2"
          :style="{ backgroundColor: this.btnColor }"
        >
          <i class="white fa fa-chevron-right"></i>
        </button>
      </div>
    </div>
    <curved-border :color="'teal'"></curved-border>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  props: {
    btnColor: {
      type: String,
      default: "light-gray",
    },
  },
  data() {
    return {
      ipsum: ipsum,
      people: [
        {
          name: "Luisa Fernanda Arrieta Fernandez",
          bio: "Luisa Fernanda Arrieta is a doctoral candidate in the History Department at the University of Connecticut. Her research focuses on national museums as stages for the performative embodiment of the state and as tools for the construction of national identities.",
          img: require("../assets/LuisaBio.png"),
          imgSize: "105%"
        },
        {
          name: "Mackenzie Fox",
          bio: "Mackenzie Fox is an Honors graduate from the University of Connecticut with a BFA in Digital Media and Design and a minor in Computer Science. Mackenzie loves contributing to creative projects by using her passion for art and her knowledge of coding. She is always up for a challenge, enjoys learning new skills, and works with great enthusiasm.",
          img: require("../assets/MackBio.png"),
          imgSize: "127%"
        },
        {
          name: "Lauren Harland (she/her)",
          bio: "Lauren Harland is a UConn sophomore pursuing a BA in Digital Media & Design with a concentration in Business Strategies. She is interested in exploring all aspects of digital media, especially digital branding and user interface design. She believes that digital media is the perfect platform to tell impactful stories and to bring people together. In her free time, Lauren enjoys exploring other artistic outlets such as painting, embroidery and film photography. ",
          img: require("../assets/LaurenBio.png"),
          imgSize: "107%"
        },
        {
          name: "Tom Lee",
          bio: "Tom Lee is a Greenhouse Studios staff member, serving as a Design Technologist. He has worked on a range of innovative interactive digital projects including motion-tracked digital play installations, AR/VR experiences, tabletop games, video games and web apps. He draws on a breadth of experience in music, engineering and design to generate and apply creative approaches to the domain of scholarly communications. He is a three-time graduate of the University of Connecticut holding a BA in Music, BS in Computer Science & Engineering, and an MFA in Digital Media & Design.",
          img: require("../assets/TomBio.png"),
          imgSize: "105%"
        },
{
          name: "Garrett McComas",
          bio: "Garrett McComas holds an MA in Classics from the University of Oregon and an MLIS from the University of Illinois at Urbana-Champaign. Prior to working at Greenhouse Studios, Garrett worked as a Graduate Research Assistant at UIUC for the Classroom and the Future of the Historical Record (CFHR) project, where he helped to publish projects in the Digital Humanities. Garrett is interested in the history of information practices and classification as well as the publication and preservation of Digital Humanities projects.",
          img: require("../assets/GlennBio.png"),
          imgSize: "107%"
        },
        {
          name: "Glenn Mitoma",
          bio: "Glenn Mitoma is an Assistant Professor of Human Rights and Education, jointly appointed with the Human Rights Institute and the Neag School of Education Department of Curriculum and Instruction. Glenn is inaugural Director of Dodd Impact, previously serving as director of the Thomas J. Dodd Research Center since 2013. Glenn’s research and teaching focus on the history of human rights and human rights education, with current projects on the role of education in advancing respect for human rights, the history of human rights education, a biography of the Lebanese philosopher and diplomat—and prominent UN Universal Declaration of Human Rights author—Charles H. Malik.",
          img: require("../assets/GlennBio.png"),
          imgSize: "127%"
        },
        {
          name: "Roya Movahed",
          bio: "Roya is a graduate student at DMD with a concentration in Web/Interactive Media Design in Uconn. Her story started with the choice of Visual Communication eight years ago, but it was not limited to that. Now, after years of studying in this environment and working in different positions as a: Visual Designer, Multimedia Specialist, etc. Roya can introduce herself as a highly motivated, creative, and conscientious professional who is eager to learn the principles of aesthetics and digital arts, to take advantage of their combination to achieve more effective methods of communication. Having a nerd side in her soul, she is going to discover the User Experience Design world at UConn. ",
          img: require("../assets/RoyaBio.png"),
          imgSize: "127%"
        },
        {
          name: "Sage Phillips (she/her)",
          bio: "From Old Town, ME Sage is a senior double-majoring in Political Science and Human Rights with a minor in Native American & Indigenous Studies at the University of Connecticut. As a young panawáhpskewi (Penobscot) woman of the Wabanaki people, and a newly named Harry S. Truman, Udall, and Cohen Scholar Sage has made it her mission to make land-grant institutions like UConn a better place for Native and Indigenous students. She is the Founding President of the Native American & Indigenous Students Association and the Student Coordinator for the Native American Cultural Programs.",
          img: require("../assets/SageBio.png"),
          imgSize: "127%"
        },
        {
          name: "Cameron Slocum",
          bio: "In the world of digital media, Cameron is especially interested in 2D animation and 3D modeling. Outside of digital media, she enjoys designing lighting and furniture. Cameron loves learning new techniques she can use to bring her ideas to life. In her spare time, Cameron can be found hiking, making a rug, or listening to music.",
          img: require("../assets/CameronBio.png"),imgSize: "105%"
        },
        {
          name: "Carly Wanner-Hyde (she/her)",
          bio: "Carly specializes in 3D Animation, design, illustration, and group facilitation. She is passionate about using her creative platform to amplify the voices and experiences of others. She believes art can be used to jump-start change to benefit our current social climate and initiate difficult yet necessary conversations. Her work encourages people to view different perspectives, spark empathy, engage with their communities, and inspire. She enjoys drawing, woodworking, rock climbing, and playing outside.",
          img: require("../assets/CarlyBio.png"),imgSize: "127%"
        },
        {
          name: "Miles Waterbury",
          bio: "Miles Waterbury is a Digital Media and Design Major pursuing a BFA with a concentration in 3D Animation.  In addition to focusing on 3D animation, Miles tries to expand his skill set by taking classes within all the various Digital Media and Design concentrations.  In addition to his major Miles is heavily involved in the UConn Marching Band and UConn Pep Band.  Miles also a part of the UCMB Media team and a brother of Kappa Kappa Psi, a national honorary band fraternity.  Miles strives to improve his digital media abilities while at the same time giving back to the organization that he holds so dear to his heart.",
          img: require("../assets/MilesBio.png"),imgSize: "110%"
        },
      ],
      index: 0,
    };
  },
  computed: {
    currentPerson() {
      return this.people[this.index];
    },
  },
  methods: {
    changeIndex(dir) {
      this.index =
        this.index === 0 && dir < 0
          ? this.people.length - 1
          : (this.index + dir) % this.people.length;
    },
  },
};
</script>

<style lang="scss" scoped>
#profile-image {
  border-radius: 1000px 1000px 0 0;
  background-image: url("../assets/lgct-logo.png");
  background-repeat: no-repeat;
  background-size: 90%;
  background-position-y: 50%;
  background-position-x: 50%;
  height: 50vh;
  width: 25vw;
}
#text-card {
  border-radius: 0 1000px 1000px 0;
}
@media screen and (min-width: 60em) {
  #largescreen {
    display: flex;
  }
  #smallscreen {
    display: none;
  }
}
@media screen and (max-width: 60em) {
  #largescreen {
    display: none;
  }
  #smallscreen {
    display: inline;
  }
}
img {
  max-height: 40%;
  width: 50%;
}
</style>