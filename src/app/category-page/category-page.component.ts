import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

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
  public category: Category;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.contentService.getCategories().subscribe((categories: Category[]) => {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.category = categories.find(
          category => category.shortName === params.shortName
        );

        if (this.category === undefined) {
          this.router.navigateByUrl("");
        } else {
          this.titleService.setTitle(this.category.displayName);
        }
      });
    });
  }
}
