import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Article } from "../common/interface/article";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-article-page",
  templateUrl: "./article-page.component.html",
  styleUrls: [
    "./article-page.component.scss"
  ]
})
export class ArticlePageComponent implements OnInit {
  public article: Article;
  public fullStoryOptions: string[];

  constructor(
    public titleService: Title,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {
    this.fullStoryOptions = [
      "DELETE_FIRST_SENTENCE"
    ];
  }

  ngOnInit(): void {
    this.contentService.getArticles().subscribe((articles: Article[]) => {
      this.activatedRoute.params.subscribe((params: Params) => {
        const article = articles.find(
          article => article.headLine === decodeURI(params.headline)
        );

        if (article === undefined) {
          this.router.navigateByUrl("");
        } else {
          this.titleService.setTitle(article.headLine);
          this.article = article;
        }
      });
    });
  }

  public displayMultimedia(article: Article): boolean {
    return article.hasVideoPlaceholder || article.numberOfImages > 0;
  }

  public displayPhoto(article: Article): boolean {
    return !article.hasVideoPlaceholder && article.numberOfImages > 0;
  }

  public displayVideo(article: Article): boolean {
    return article.hasVideoPlaceholder;
  }
}
