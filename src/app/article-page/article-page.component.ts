import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { ElementRef } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { ViewChild } from "@angular/core";

import { Article } from "../common/interface/article";
import { Comment } from "../common/interface/comment";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: [ "./article-page.component.scss" ]
})
export class ArticlePageComponent implements OnInit {
  @ViewChild("submitButton") submitButton: ElementRef;

  public httpErrorResponse: HttpErrorResponse;

  public article: Article;
  public fullStoryOptions: string[];

  public commentError: boolean;
  public commentText: string;

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

    this.commentError = false;
    this.commentText = "";

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

  public onSubmit(): void {
    this.submitButton.nativeElement.blur();

    if (this.commentText.trim() === "") {
      this.commentError = true;
    } else {
      this.commentError = false;

      const newComment = {
        articleId: this.article.id,
        commentText: this.commentText,
        createdDate: (new Date()).toISOString(),
        emailAddress: "jstickles@captechventures.com",
        id: this.nextCommentId(),
        name: "Josh Stickles",
        updatedDate: (new Date()).toISOString()
      };

      this.contentService.postComment(newComment).subscribe(
        (comment: Comment) => {
          this.commentText = "";
          this.getPaginatedComments();
        },
        (httpErrorResponse: HttpErrorResponse) => this.httpErrorResponse = httpErrorResponse
      );
    }
  }

  public formatDate(date: string): string {
    const shortTime = this.datePipe.transform(date, "shortTime");
    const fullDate = this.datePipe.transform(date, "fullDate");

    return `${shortTime}, ${fullDate}`;
  }

  public displayShowLessButton(pageNumber: number): boolean {
    return this.pagesDisplayed > 1 && pageNumber === this.pagesDisplayed - 1;
  }

  public showLess(): void {
    this.pagesDisplayed -= 1;
  }

  public displayShowMoreButton(pageNumber: number): boolean {
    return this.pagesDisplayed < this.paginatedComments.length && pageNumber === this.pagesDisplayed - 1;
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

  private nextCommentId(): number {
    const lastPageOfComments = this.paginatedComments[this.paginatedComments.length - 1];
    const lastComment = lastPageOfComments[lastPageOfComments.length - 1];

    return lastComment.id + 1;
  }
}
