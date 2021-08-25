<template>
  <div class="tl pa5" @click="showParagraph = !showParagraph">
    <h1 class="title ml6"><slot></slot></h1>
    <p v-show="showParagraph" class="sans-serif ml6">{{ sampleText }}</p>
  </div>
</template>

<script>
export default {
  name: "CollapsibleTab",
  data() {
    return {
      showParagraph: false,
      sampleText: `The parcels sold in modern day Houghton county show how Indigenous land was surveyed, stolen and sold to private citizens for economic exploitation through acts like the Morrill Act.  From the perspective of the United States, the Ojibwe first formally established ties with the Americans in 1837 through the Treaty of St. Peters. However, the Ojibwe had political relationships with outsiders for many years before that. By this time, the Ojibwe “had a long history of beneficial alliances with European-descended peoples, commencing with the French in the 1660s and, after the French defeat in the Seven Years War in 1763, with the British.”[1] These alliances were “conducted within a framework largely derived from Native understandings”[2], and in in the earliest political contacts, the United States seemed to follow the this protocol. The first formal political conference between the Ojibwe and American representatives was in 1805 with the Zebulon M. Pike expedition. After the War of 1812, the United States again made efforts to establish friendly relations with the Indigenous people. The Ojibwe themselves dated the start of an actual alliance to the postwar years.[3] Major problems seem to have began in 1825, after Commissioners William Clark and Lewis Cass assembled over 3,000 representatives from numerous tribes at Prairie du Chien “with the object of promoting peace among the tribes of the northwest and establishing boundaries between each tribe.”[4] It is after this treaty that the United States began to act as though it possessed authority over the Ojibwe.
The tribes of this area had been warring for some time, although their disputes were not like those of nation-states, where war is conducted to advance political objectives like the control of resources and land.[5] Nevertheless, in the 1825 meeting the United States suggested fixed boundaries where tribes could only hunt within the boundaries of another tribe with assent. The Treaty of Prairie du Chien did little to stop intertribal warfare, but it did establish a new type of relationship between the Ojibwe and American representatives and formally established the boundaries in the American mind and law, setting the people up for a future erosion of sovereignty and setting the land up for future partitioning and sale.

In the 1826 Fond du Lac Treaty, the Ojibwe granted the United States the right to prospect for minerals on their land as it was established in the 1825 treaty, which included the modern day Upper Peninsula of Michigan. For hundreds of years, it was known that the area currently referred to as the “Keweenaw Bay” held large amounts of copper. In fact, a few years earlier, in 1820, Lewis Cass had led an expedition to survey the western part of modern day Michigan, with one of the objectives being to search for commercially valuable minerals, more specifically “the body of copper in the vicinity of Lake Superior.”[9] Cass was particularly interested in the area that produced the massive Ontonagon Boulder, a 3,708 pound boulder of native copper. In tow was Henry Rowe Schoolcraft, a geologist and ethnographer from Albany, New York who was particularly interested in the study of minerals. Having looked at the boulder himself, Schoolcraft decided that the area must be filled with veins of the same mineral. After the expedition, communications and publications grew about the “Keweenaw copper”, and “molded the views of a nation hungry for news of the expanding west.”[10] While it is difficult to say what the exact motivations of Cass’s involvement in the 1825 and 1826 treaties were, given that he stated purpose for his expedition and the growing interest in the copper of the region, one must at the very least not take his stated reasons at face value. In 1831, Cass took up the appointment of Secretary of War, and helped to implement Andrew Jackson’s policy of Indian removal.`,
    };
  },
  methods: {},
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
  transition: 0.2s;
  position: absolute;
  width: 100%;
}

div:hover {
  background: #4d9ba3;
  padding-bottom: 50px;
}
div::after {
  height: 100px;
  width: 100%;
  position: absolute;
  left: -1px;
  background: #70b9b2;
  content: "";
  transition: 0.2s;
}
div:hover::after {
  background: #4d9ba3;
}
</style>