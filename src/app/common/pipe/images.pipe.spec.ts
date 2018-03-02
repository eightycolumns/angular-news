import { ImagesPipe } from "./images.pipe";

describe("ImagesPipe", () => {
  const pipe = new ImagesPipe();

  const articleStub = {
    categoryId: 0,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    headLine: "Headline",
    id: 0,
    location: "Location",
    nsfw: false,
    numberOfImages: 2,
    relatedArticleIds: [],
    snippet: "Snippet"
  };

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  describe("when passed an article", () => {
    it("returns an array of length equal to the number of images in the article", () => {
      const images = pipe.transform(articleStub);
      expect(images.length).toBe(articleStub.numberOfImages);
    });
  });

  describe("when passed an article and a second argument n, where n is less than the number of images in the article", () => {
    it("returns an array of length n", () => {
      const images = pipe.transform(
        articleStub, articleStub.numberOfImages - 1
      );

      expect(images.length).toBe(articleStub.numberOfImages - 1);
    });
  });

  describe("when passed an article and a second argument n, where n is greater than the number of images in the article", () => {
    it("returns an array of length equal to the number of images in the article", () => {
      const images = pipe.transform(
        articleStub, articleStub.numberOfImages + 1
      );

      expect(images.length).toBe(articleStub.numberOfImages);
    });
  });
});
