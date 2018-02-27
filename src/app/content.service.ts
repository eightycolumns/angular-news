import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Article } from "./article";
import { Banner } from "./banner";
import { Category } from "./category";

@Injectable()
export class ContentService {
  private baseUrl = "http://challengenewsapi.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) {}

  public getArticlesByCategory(shortName: string): Observable<Article[]> {
    const articles = this.getArticles();
    const categories = this.getCategories();

    return Observable.zip(articles, categories, (articles, categories) => {
      const category = categories.find(
        category => category.shortName === shortName
      );

      return articles.filter(article => article.categoryId === category.id);
    });
  }

  public getBanners(): Observable<Banner[]> {
    const url = `${this.baseUrl}/Banners`;
    return this.httpClient.get<Banner[]>(url);
  }

  public getCategories(): Observable<Category[]> {
    const url = `${this.baseUrl}/Categories`;
    return this.httpClient.get<Category[]>(url);
  }

  private getArticles(): Observable<Article[]> {
    const url = `${this.baseUrl}/Articles`;
    return this.httpClient.get<Article[]>(url);
  }
}
