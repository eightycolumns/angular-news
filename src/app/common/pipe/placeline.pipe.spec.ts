import { PlacelinePipe } from "./placeline.pipe";

describe("PlacelinePipe", () => {
  const pipe = new PlacelinePipe();

  const articleStub = {
    categoryId: 0,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    headLine: "Headline",
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

  describe("when passed an article", () => {
    it("returns the placeline in upper case", () => {
      const placeline = pipe.transform(articleStub);
      expect(placeline).toBe(articleStub.location.toUpperCase());
    });
  });
});
