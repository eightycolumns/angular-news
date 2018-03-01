import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Article } from "../interface/article";
import { Banner } from "../interface/banner";
import { Category } from "../interface/category";
import { FeaturedSection } from "../interface/featured-section";

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

  public getFeaturedSections(): Observable<FeaturedSection[]> {
    const url = `${this.baseUrl}/FeaturedSections`;
    return this.httpClient.get<FeaturedSection[]>(url);
  }

  private getArticles(): Observable<Article[]> {
    const url = `${this.baseUrl}/Articles`;
    return this.httpClient.get<Article[]>(url);
  }
}
