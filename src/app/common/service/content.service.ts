import { catchError } from "rxjs/operators";
import { ErrorObservable } from "rxjs/observable/ErrorObservable";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { retry } from "rxjs/operators";

import { Article } from "../interface/article";
import { Banner } from "../interface/banner";
import { Category } from "../interface/category";
import { Section } from "../interface/section";

@Injectable()
export class ContentService {
  private baseUrl = "http://challengenewsapi.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) {}

  public getArticles(): Observable<Article[]> {
    const url = `${this.baseUrl}/Articles`;

    return this.httpClient.get<Article[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getArticlesByCategory(id: number): Observable<Article[]> {
    const url = `${this.baseUrl}/Categories/${id}/Articles`;

    return this.httpClient.get<Article[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getBanners(): Observable<Banner[]> {
    const url = `${this.baseUrl}/Banners`;

    return this.httpClient.get<Banner[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getCategories(): Observable<Category[]> {
    const url = `${this.baseUrl}/Categories`;

    return this.httpClient.get<Category[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getFeaturedSections(): Observable<Section[]> {
    const url = `${this.baseUrl}/FeaturedSections`;

    return this.httpClient.get<Section[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(httpErrorResponse: HttpErrorResponse): ErrorObservable {
    return new ErrorObservable("Oops! Something went wrong. Please try again later.");
  }
}
