export interface Article {
  categoryId: number;
  fullStory: string;
  hasVideoPlaceholder: boolean;
  headLine: string;
  id: number;
  location: string;
  nsfw: boolean;
  numberOfImages: number;
  relatedArticleIds: number[];
  snippet: string;
}
