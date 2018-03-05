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

  public getArticles(id: number): Observable<Article[]> {
    const url = `${this.baseUrl}/Categories/${id}/Articles`;
    return this.httpClient.get<Article[]>(url);
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
}
