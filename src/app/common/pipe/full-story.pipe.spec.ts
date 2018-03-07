import { FullStoryPipe } from "./full-story.pipe";

describe("FullStoryPipe", () => {
  const pipe = new FullStoryPipe();

  const articleStub = {
    categoryId: 1,
    fullStory: "First sentence. Second sentence.<br><br>Third sentence.",
    hasVideoPlaceholder: false,
    headLine: "Headline",
    id: 1,
    location: "Location",
    nsfw: false,
    relatedArticleIds: [],
    snippet: "Snippet"
  };

  describe("when passed an article and a DELETE_FIRST_SENTENCE option", () => {
    it("deletes the first sentence from the full story", () => {
      const article = Object.defineProperty(articleStub, "numberOfImages", { value: 0 });

      const options = [
        "DELETE_FIRST_SENTENCE"
      ];

      expect(pipe.transform(article, options)).toBe("Second sentence.<br><br>Third sentence.");
    });
  });

  describe("when passed an article with 0 photos", () => {
    it("inserts 0 photo elements into the full story", () => {
      const article = Object.defineProperty(articleStub, "numberOfImages", { value: 0 });
      expect(numberOfPhotos(pipe.transform(article))).toBe(0);
    });
  });

  describe("when passed an article with 1 photo", () => {
    it("inserts 0 photo elements into the full story", () => {
      const article = Object.defineProperty(articleStub, "numberOfImages", { value: 1 });
      expect(numberOfPhotos(pipe.transform(article))).toBe(0);
    });
  });

  describe("when passed an article with 1 photo and an INSERT_PHOTO option", () => {
    it("inserts 1 photo element into the full story", () => {
      const article = Object.defineProperty(articleStub, "numberOfImages", { value: 1 });

      const options = [
        "INSERT_PHOTO"
      ];

      expect(numberOfPhotos(pipe.transform(article, options))).toBe(1);
    });
  });

  describe("when passed an article with 2 photos and an INSERT_PHOTO option", () => {
    it("inserts 1 photo element into the full story", () => {
      const article = Object.defineProperty(articleStub, "numberOfImages", { value: 2 });

      const options = [
        "INSERT_PHOTO"
      ];

      expect(numberOfPhotos(pipe.transform(article, options))).toBe(1);
    });
  });
});

function numberOfPhotos(fullStory: string): number {
  const photo = /<div class="photo">\[PHOTO\]<\/div>/g;
  return fullStory.match(photo) ? fullStory.match(photo).length : 0;
}
