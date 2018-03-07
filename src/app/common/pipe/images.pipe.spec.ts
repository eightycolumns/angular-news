import { ImagesPipe } from "./images.pipe";

describe("ImagesPipe", () => {
  const pipe = new ImagesPipe();

  const articleStub = {
    categoryId: 1,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    headLine: "Headline",
    id: 1,
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
      expect(pipe.transform(articleStub).length).toBe(2);
    });
  });

  describe("when passed an article and a second argument n, where n is less than the number of images in the article", () => {
    it("returns an array of length n", () => {
      expect(pipe.transform(articleStub, 1).length).toBe(1);
    });
  });

  describe("when passed an article and a second argument n, where n is greater than the number of images in the article", () => {
    it("returns an array of length equal to the number of images in the article", () => {
      expect(pipe.transform(articleStub, 3).length).toBe(2);
    });
  });
});
