import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Article } from "../common/interface/article";
import { Comment } from "../common/interface/comment";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: [ "./article-page.component.scss" ]
})
export class ArticlePageComponent implements OnInit {
  public httpErrorResponse: HttpErrorResponse;

  public article: Article;
  public fullStoryOptions: string[];

  public paginatedComments: Comment[][];
  public pagesDisplayed: number;
  private pageSize; number;

  constructor(
    public titleService: Title,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.fullStoryOptions = [
      "DELETE_FIRST_SENTENCE"
    ];

    this.paginatedComments = [];
    this.pagesDisplayed = 1;
    this.pageSize = 10;
  }

  ngOnInit(): void {
    this.contentService.getArticles().subscribe(
      (articles: Article[]) => {
        this.activatedRoute.params.subscribe((params: Params) => {
          const article = articles.find(article => article.headLine === decodeURI(params.headline));

          if (article === undefined) {
            this.router.navigateByUrl("not-found");
          } else {
            this.titleService.setTitle(article.headLine);
            this.article = article;
            this.getPaginatedComments();
          }
        });
      },
      (httpErrorResponse: HttpErrorResponse) => this.httpErrorResponse = httpErrorResponse
    );
  }

  public displayVideo(article: Article): boolean {
    return article.hasVideoPlaceholder;
  }

  public displayPhoto(article: Article): boolean {
    return !article.hasVideoPlaceholder && article.numberOfImages > 0;
  }

  public displayMultimedia(article: Article): boolean {
    return article.hasVideoPlaceholder || article.numberOfImages > 0;
  }

  public displayShowLessButton(pageNumber: number): boolean {
    return this.pagesDisplayed > 1 && pageNumber === this.pagesDisplayed - 1;
  }

  public displayShowMoreButton(pageNumber: number): boolean {
    return this.pagesDisplayed < this.paginatedComments.length && pageNumber === this.pagesDisplayed - 1;
  }

  public formatDate(date: string): string {
    const shortTime = this.datePipe.transform(date, "shortTime");
    const fullDate = this.datePipe.transform(date, "fullDate");

    return `${shortTime}, ${fullDate}`;
  }

  public showLess(): void {
    this.pagesDisplayed -= 1;
  }

  public showMore(): void {
    this.pagesDisplayed += 1;
  }

  private getPaginatedComments(pageNumber = 0): void {
    this.contentService.getPaginatedCommentsByArticleId(this.article.id, pageNumber, this.pageSize).subscribe((comments: Comment[]) => {
      if (comments.length > 0) {
        this.paginatedComments[pageNumber] = comments;
        this.getPaginatedComments(pageNumber + 1);
      }
    });
  }
}
