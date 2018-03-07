import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import "rxjs/add/observable/zip";

import { Article } from "../common/interface/article";
import { ContentService } from "../common/service/content.service";
import { FeaturedSection } from "../common/interface/featured-section";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: [
    "./home-page.component.scss"
  ]
})
export class HomePageComponent implements OnInit {
  public aside: FeaturedSection;
  public main: FeaturedSection;
  public opinion: FeaturedSection;
  public travel: FeaturedSection;

  public opinionFullStoryOptions: string[];

  constructor(
    private contentService: ContentService,
    private titleService: Title
  ) {
    this.opinionFullStoryOptions = [
      "INSERT_PHOTO"
    ];
  }

  ngOnInit(): void {
    this.titleService.setTitle("CapTech News");

    this.contentService.getFeaturedSections().subscribe(data => {
      this.aside = data.find(section => section.description === "Aside");
      this.main = data.find(section => section.description === "Main");
      this.opinion = data.find(section => section.description === "Opinion");
      this.travel = data.find(section => section.description === "Travel");
    });
  }

  public linkTo(article: Article): string {
    return `/article/${encodeURI(article.headLine)}`;
  }
}
