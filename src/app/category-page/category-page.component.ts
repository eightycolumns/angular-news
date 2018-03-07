import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { Article } from "../common/interface/article";
import { Category } from "../common/interface/category";
import { ContentService } from "../common/service/content.service";
import { RouterLinkPipe } from "../common/pipe/router-link.pipe";

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: [
    "./category-page.component.scss"
  ]
})
export class CategoryPageComponent implements OnInit {
  public mainArticle: Article;
  public mainFullStoryOptions: string[];

  public asideArticles: Article[];
  public asideFullStoryOptions: string[];

  constructor(
    public titleService: Title,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {
    this.mainFullStoryOptions = [
      "DELETE_FIRST_SENTENCE"
    ];

    this.asideFullStoryOptions = [
      "INDENT_AFTER_LINE_BREAKS",
      "INSERT_PHOTO"
    ];
  }

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((categories: Category[]) => {
      this.activatedRoute.params.subscribe((params: Params) => {
        const category = categories.find(
          category => category.shortName === params.shortName
        );

        if (category === undefined) {
          this.router.navigateByUrl("");
        } else {
          this.titleService.setTitle(category.displayName);

          this.contentService.getArticlesByCategory(category.id).subscribe(data => {
            this.mainArticle = data[0];
            this.asideArticles = data.slice(1);
          });
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
