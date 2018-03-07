import { RouterLinkPipe } from "./router-link.pipe";

describe("RouterLinkPipe", () => {
  const pipe = new RouterLinkPipe();

  const articleStub = {
    categoryId: 1,
    fullStory: "Article Full Story",
    hasVideoPlaceholder: false,
    headLine: "Article Headline",
    id: 1,
    location: "Article Location",
    nsfw: false,
    numberOfImages: 0,
    relatedArticleIds: [],
    snippet: "Article Snippet"
  };

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  describe("when passed an article", () => {
    it("returns a percent-encoded routerLink string", () => {
      const routerLink = pipe.transform(articleStub);
      expect(routerLink).toBe("/article/Article%20Headline");
    });
  });
});
