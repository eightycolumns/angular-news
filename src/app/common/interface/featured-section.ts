import { Article } from "./article";

export interface FeaturedSection {
  articles: Article[];
  description: string;
  id: number;
}
