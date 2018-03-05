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

@Component({
  selector: "app-category-page",
  templateUrl: "./category-page.component.html",
  styleUrls: [
    "./category-page.component.scss"
  ]
})
export class CategoryPageComponent implements OnInit {
  public articles: Article[];

  constructor(
    public titleService: Title,
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router: Router
  ) {}

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

          this.contentService.getArticles(category.id).subscribe(
            data => this.articles = data
          );
        }
      });
    });
  }
}
