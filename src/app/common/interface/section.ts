import { Article } from "./article";

export interface Section {
  articles: Article[];
  description: string;
  id: number;
}
