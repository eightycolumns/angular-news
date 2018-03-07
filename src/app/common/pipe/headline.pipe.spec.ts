import { HeadlinePipe } from "./headline.pipe";

describe("HeadlinePipe", () => {
  const pipe = new HeadlinePipe();

  const articleStub = {
    categoryId: 1,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    id: 1,
    location: "Location",
    nsfw: false,
    numberOfImages: 0,
    relatedArticleIds: [],
    snippet: "Snippet"
  };

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  describe("when passed an article with a colon in the headline", () => {
    it("returns the headline split into two spans", () => {
      const article = Object.defineProperty(articleStub, "headLine", { value: "Headline: With a Colon" });
      expect(pipe.transform(article)).toBe("<span>Headline:</span><span> With a Colon</span>");
    });
  });

  describe("when passed an article without a colon in the headline", () => {
    it("returns the headline unaltered", () => {
      const article = Object.defineProperty(articleStub, "headLine", { value: "Headline" });
      expect(pipe.transform(article)).toBe("Headline");
    });
  });
});
