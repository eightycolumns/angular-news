import { HeadlinePipe } from "./headline.pipe";

describe("HeadlinePipe", () => {
  const pipe = new HeadlinePipe();

  const articleStub = {
    categoryId: 0,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    id: 0,
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
      const articleWithColonInHeadline = Object.defineProperty(
        articleStub, "headLine", { value: "Headline: With a Colon" }
      );

      const headline = pipe.transform(articleWithColonInHeadline);

      expect(headline).toBe("<span>Headline:</span><span> With a Colon</span>");
    });
  });

  describe("when passed an article without a colon in the headline", () => {
    it("returns the headline unaltered", () => {
      const articleWithoutColonInHeadline = Object.defineProperty(
        articleStub, "headLine", { value: "Headline" }
      );

      const headline = pipe.transform(articleWithoutColonInHeadline);

      expect(headline).toBe("Headline");
    });
  });
});
