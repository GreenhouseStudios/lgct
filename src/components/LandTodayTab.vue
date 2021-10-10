<template>
  <div class="tl pa5 ml5-l ml3" @click="toggleTab">
    <h1 class="title f3-l f4 ml6-l ml5"><slot name="heading"></slot></h1>
    <span class="flex">
      <span
        class="flex flex-column flex-row-l pa4 pb5 br4 lh-title mh4 w-100"
        id="main-content"
        v-show="showContent"
      >
        <span class="sans-serif lh-copy mr3 f3 fw5">
          <slot></slot>
        </span>
        <ul class="f3 tl fw4 flex-column flex-wrap mh4">
          <button
            @click.stop="siteIndex = index"
            v-for="(item,index) in sitesObj.sites"
            :key="item.name"
            class="bn br2 ma2 shadow-3 pa2 grow f5 pv0"
          >
            <p>{{ item.name }}</p>
          </button>
        </ul>
        <span class="br4 pa4 relative mr6" style="background: #fefcf5; max-width: 500px">
          <img :src="sitesObj.sites[siteIndex].img" :alt="sitesObj.sites[siteIndex].name" style="object-fit:cover;"/>
          <a v-if="sitesObj.sites[siteIndex].link" :href="sitesObj.sites[siteIndex].link" class="lgct-red sans-serif pt2 fw4 tc underline"
            >Street View</a
          >
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import ipsum from "../ipsum.js";
export default {
  name: "LandTodayTab",
  props: {
    template: {
      type: String,
      default: "default",
    },
    showContent: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default:
        "https://www.google.com/maps/@41.8070688,-72.2515152,3a,75y,144.77h,90t/data=!3m7!1e1!3m5!1sFkuA0rIA97tcwL4Z8buwCA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DFkuA0rIA97tcwL4Z8buwCA%26cb_client%3Dsearch.revgeo_and_fetch.gps%26w%3D96%26h%3D64%26yaw%3D144.77007%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656",
    },
    sitesObj: {
      type: Object,
      default: function () {
        return {
          name: "Nebraska",
          sites: [
            {
              name: "Nebraska Wesleyan Campus",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/@40.8376097,-96.6497008,3a,75y,303.47h,94t/data=!3m7!1e1!3m5!1shguwLJGDUi18DIj7SoguJw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DhguwLJGDUi18DIj7SoguJw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D160.32758%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
            },
            {
              name: "Walgreens",
              img: require("../assets/Parcel Imgs/NebraskaParcel/nebraska-walgreens.png"),
              link: "https://www.google.com/maps/@40.8378821,-96.6534696,3a,75y,147.32h,86.78t/data=!3m7!1e1!3m5!1sycZZ6bUOWQnkBbLRviSOrw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DycZZ6bUOWQnkBbLRviSOrw%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D92.46353%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"
            },
            {
              name: "Lincoln Police Dept Northeast Team Station",
              img: require("../assets/Parcel Imgs/NebraskaParcel/nebraska-lincoln-pd.png"),
              link: "https://www.google.com/maps/@40.8372547,-96.6526069,3a,75y,169.98h,86.18t/data=!3m6!1e1!3m4!1seLwAoF7_oJot-DDlWT24cQ!2e0!7i16384!8i8192"
            },
            {
              name: "Ayers & Ayers, Inc. Construction Company",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/place/Makovicka+Physical+Therapy/@40.8372615,-96.652958,3a,75y,196.57h,91.24t/data=!3m7!1e1!3m5!1szaOIoeFH7z7od8x4WM2edQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzaOIoeFH7z7od8x4WM2edQ%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D270.15237%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x8796bc10082b9e29:0xa9a96b9962053ade!8m2!3d40.8369281!4d-96.6533166"
            },
            {
              name: "Makovicka Physical Therapy",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/place/Makovicka+Physical+Therapy/@40.837263,-96.6531987,3a,75y,183.91h,89.17t/data=!3m6!1e1!3m4!1sorCv5zVwhgT0WMjEhd07ew!2e0!7i16384!8i8192!4m5!3m4!1s0x8796bc10082b9e29:0xa9a96b9962053ade!8m2!3d40.8369281!4d-96.6533166"
            },
            {
              name: "United Methodist Church",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/@40.8393145,-96.651225,3a,75y,334.1h,100.38t/data=!3m6!1e1!3m4!1s11tX3_-QEIkTlmFlxKGukw!2e0!7i16384!8i8192"
            },
            {
              name: "Art Studio/Gallery",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
            },
            {
              name: "Beauty  and Tattoo Salons",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
            },
            {
              name: "Plumbing Business",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
            },
            {
              name: "Massage Studio - Empowered Healing",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/@40.8398342,-96.6536387,3a,75y,140.58h,85.42t/data=!3m6!1e1!3m4!1sli-dUWNs-TdFalAhCF5x6A!2e0!7i16384!8i8192"
            },
            {
              name: "Automotive Shop",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
            },
            {
              name: "Sorority and Fraternity House",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/@40.840326,-96.649772,3a,75y,316.78h,86.68t/data=!3m7!1e1!3m5!1sdYIIbxQJkOveH6xB5kv0HA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DdYIIbxQJkOveH6xB5kv0HA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D169.75478%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656"
            },
            {
              name: "Chain Restaurants",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
            },
            {
              name: "Building Consultancy - Branch Pattern",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/@40.8409983,-96.6537131,3a,75y,81.36h,83.34t/data=!3m7!1e1!3m5!1szEdTrDQkwVYyqsXIPg_JvA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzEdTrDQkwVYyqsXIPg_JvA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D67.79744%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192"
            },
            {
              name: "Jeweler",
              img: require("../assets/Parcel Imgs/NebraskaParcel/NebraskaWesleyan.png"),
              link: "https://www.google.com/maps/place/24%2F7+Commercial+Handyman+Services/@40.840104,-96.6536389,3a,75y,103.56h,84.31t/data=!3m6!1e1!3m4!1syfs3J7dm1LZPYxkCefKmVw!2e0!7i16384!8i8192!4m12!1m6!3m5!1s0x8796bc10082b9e29:0xa9a96b9962053ade!2sMakovicka+Physical+Therapy!8m2!3d40.8369281!4d-96.6533166!3m4!1s0x8796bc05791265df:0x260d76bcf1e92282!8m2!3d40.8399646!4d-96.6535517"
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      list: Array(12)
        .fill(2)
        .map((x) => ipsum.generateWords(x + Math.floor(Math.random() * 2))),
      ipsum: ipsum,
      sampleText: `The parcels sold in modern day Houghton county show how Indigenous land was surveyed, stolen and sold to private citizens for economic exploitation through acts like the Morrill Act.  From the perspective of the United States, the Ojibwe first formally established ties with the Americans in 1837 through the Treaty of St. Peters. However, the Ojibwe had political relationships with outsiders for many years before that. By this time, the Ojibwe “had a long history of beneficial alliances with European-descended peoples, commencing with the French in the 1660s and, after the French defeat in the Seven Years War in 1763, with the British.”[1] These alliances were “conducted within a framework largely derived from Native understandings”[2], and in in the earliest political contacts, the United States seemed to follow the this protocol. The first formal political conference between the Ojibwe and American representatives was in 1805 with the Zebulon M. Pike expedition. After the War of 1812, the United States again made efforts to establish friendly relations with the Indigenous people. The Ojibwe themselves dated the start of an actual alliance to the postwar years.[3] Major problems seem to have began in 1825, after Commissioners William Clark and Lewis Cass assembled over 3,000 representatives from numerous tribes at Prairie du Chien “with the object of promoting peace among the tribes of the northwest and establishing boundaries between each tribe.”[4] It is after this treaty that the United States began to act as though it possessed authority over the Ojibwe.
The tribes of this area had been warring for some time, although their disputes were not like those of nation-states, where war is conducted to advance political objectives like the control of resources and land.[5] Nevertheless, in the 1825 meeting the United States suggested fixed boundaries where tribes could only hunt within the boundaries of another tribe with assent. The Treaty of Prairie du Chien did little to stop intertribal warfare, but it did establish a new type of relationship between the Ojibwe and American representatives and formally established the boundaries in the American mind and law, setting the people up for a future erosion of sovereignty and setting the land up for future partitioning and sale.

In the 1826 Fond du Lac Treaty, the Ojibwe granted the United States the right to prospect for minerals on their land as it was established in the 1825 treaty, which included the modern day Upper Peninsula of Michigan. For hundreds of years, it was known that the area currently referred to as the “Keweenaw Bay” held large amounts of copper. In fact, a few years earlier, in 1820, Lewis Cass had led an expedition to survey the western part of modern day Michigan, with one of the objectives being to search for commercially valuable minerals, more specifically “the body of copper in the vicinity of Lake Superior.”[9] Cass was particularly interested in the area that produced the massive Ontonagon Boulder, a 3,708 pound boulder of native copper. In tow was Henry Rowe Schoolcraft, a geologist and ethnographer from Albany, New York who was particularly interested in the study of minerals. Having looked at the boulder himself, Schoolcraft decided that the area must be filled with veins of the same mineral. After the expedition, communications and publications grew about the “Keweenaw copper”, and “molded the views of a nation hungry for news of the expanding west.”[10] While it is difficult to say what the exact motivations of Cass’s involvement in the 1825 and 1826 treaties were, given that he stated purpose for his expedition and the growing interest in the copper of the region, one must at the very least not take his stated reasons at face value. In 1831, Cass took up the appointment of Secretary of War, and helped to implement Andrew Jackson’s policy of Indian removal.`,
      siteIndex: 0,
    };
  },
  methods: {
    toggleTab() {
      this.$emit("toggle-tab", this);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background: #70b9b2;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 1px;
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.6);
  border-radius: 70px 0 0 0;
  height: auto;
  transition: 0.3s;
  position: absolute;
  width: 100%;
}
@media screen and (max-width: 60em) {
  #main-content {
    height: auto;
    max-height: 60vh;
    background: #64aaa3;
  }
}
@media screen and (min-width: 60em) {
  #main-content {
    height: auto;
    max-height: 70vh;
    background: #64aaa3;
  }
}

div:hover {
  background: #4d9ba3;
  padding-bottom: 50px;
}
div::after {
  height: 100px;
  width: 100%;
  position: absolute;
  left: 0;
  background: #70b9b2;
  content: "";
  transition: 0.3s;
}
div:hover::after {
  background: #4d9ba3;
}
</style>