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
import { Comment } from "../interface/comment";
import { Section } from "../interface/section";

@Injectable()
export class ContentService {
  private baseUrl = "http://challengenewsapi.azurewebsites.net/api";

  constructor(private httpClient: HttpClient) {}

  public deleteComment(comment: Comment): Observable<Comment> {
    const url = `${this.baseUrl}/Comments/${comment.id}`;

    return this.httpClient.delete<Comment>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getArticles(): Observable<Article[]> {
    const url = `${this.baseUrl}/Articles`;

    return this.httpClient.get<Article[]>(url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  public getArticlesByCategoryId(categoryId: number): Observable<Article[]> {
    const url = `${this.baseUrl}/Categories/${categoryId}/Articles`;

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

  public getPaginatedCommentsByArticleId(articleId: number, pageNumber: number, pageSize: number): Observable<Comment[]> {
    const url = `${this.baseUrl}/Articles/${articleId}/Comments/${pageNumber}/${pageSize}`;

    return this.httpClient.get<Comment[]>(url).pipe(
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

  public postComment(comment: Comment): Observable<Comment> {
    const url = `${this.baseUrl}/Comments`;

    return this.httpClient.post<Comment>(url, comment).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  private handleError(httpErrorResponse: HttpErrorResponse): ErrorObservable {
    return new ErrorObservable("Oops! Something went wrong. Please try again later.");
  }
}
