import { FirstSentencePipe } from "./first-sentence.pipe";

describe("FirstSentencePipe", () => {
  const pipe = new FirstSentencePipe();

  const articleStub = {
    categoryId: 1,
    fullStory: "First sentence. Second sentence.",
    hasVideoPlaceholder: false,
    headLine: "Headline",
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

  describe("when passed an article", () => {
    it("returns the first sentence of the full story", () => {
      expect(pipe.transform(articleStub)).toBe("First sentence.");
    });
  });
});
