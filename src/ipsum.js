import { LoremIpsum } from "lorem-ipsum";

const ipsum = new LoremIpsum({
  sentencesPerParagraph: {
    max:8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export default ipsum;
