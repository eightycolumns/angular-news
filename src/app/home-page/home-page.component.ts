import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import "rxjs/add/observable/zip";

import { Article } from "../common/interface/article.interface";
import { Category } from "../common/interface/category.interface";
import { ContentService } from "../common/service/content.service";
import { SummaryPipe } from "../common/pipe/summary.pipe";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: [
    "./home-page.component.scss"
  ]
})
export class HomePageComponent implements OnInit {
  public businessArticles: Article[];
  public fashionArticles: Article[];
  public opinionArticles: Article[];
  public sportsArticles: Article[];
  public travelArticles: Article[];
  public videoArticles: Article[];
  public worldArticles: Article[];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getArticlesByCategory("business").subscribe(
      data => this.businessArticles = data
    );

    this.contentService.getArticlesByCategory("fashion").subscribe(
      data => this.fashionArticles = data
    );

    this.contentService.getArticlesByCategory("opinion").subscribe(
      data => this.opinionArticles = data
    );

    this.contentService.getArticlesByCategory("sports").subscribe(
      data => this.sportsArticles = data
    );

    this.contentService.getArticlesByCategory("travel").subscribe(
      data => this.travelArticles = data
    );

    this.contentService.getArticlesByCategory("video").subscribe(
      data => this.videoArticles = data
    );

    this.contentService.getArticlesByCategory("world").subscribe(
      data => this.worldArticles = data
    );
  }

  public opinionArticleSummary(i: number): string {
    const article = this.opinionArticles[i];

    const location = `<span class="location">${article.location}</span>`;
    const summary = article.snippet.replace("<br><br>", "</p><p>");

    return `<p>${location}${summary}</p>`;
  }
}
