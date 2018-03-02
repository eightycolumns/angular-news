import { FullStoryPipe } from "./full-story.pipe";

describe("FullStoryPipe", () => {
  let pipe: FullStoryPipe;

  const articleStub = {
    categoryId: 0,
    fullStory: "Paragraph<br><br>Paragraph",
    hasVideoPlaceholder: false,
    headLine: "Headline",
    id: 0,
    location: "Location",
    nsfw: false,
    relatedArticleIds: [],
    snippet: "Snippet"
  };

  beforeEach(() => {
    pipe = new FullStoryPipe();
  });

  it("creates an instance", () => {
    expect(pipe).toBeTruthy();
  });

  describe("when passed an article with 0 photos", () => {
    it("inserts 0 photo elements into the full story", () => {
      const articleWithZeroPhotos = Object.defineProperty(
        articleStub, "numberOfImages", { value: 0 }
      );

      const fullStory = pipe.transform(articleWithZeroPhotos);

      expect(numberOfPhotos(fullStory)).toBe(0);
    });
  });

  describe("when passed an article with 1 photo", () => {
    it("inserts 1 photo element into the full story", () => {
      const articleWithOnePhoto = Object.defineProperty(
        articleStub, "numberOfImages", { value: 1 }
      );

      const fullStory = pipe.transform(articleWithOnePhoto);

      expect(numberOfPhotos(fullStory)).toBe(1);
    });
  });

  describe("when passed an article with 2 photos", () => {
    it("inserts 1 photo element into the full story", () => {
      const articleWithTwoPhotos = Object.defineProperty(
        articleStub, "numberOfImages", { value: 2 }
      );

      const fullStory = pipe.transform(articleWithTwoPhotos);

      expect(numberOfPhotos(fullStory)).toBe(1);
    });
  });
});

function numberOfPhotos(fullStory: string): number {
  const photo = /<div class='photo'>\[PHOTO\]<\/div>/g;
  return fullStory.match(photo) ? fullStory.match(photo).length : 0;
}
