import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import "rxjs/add/observable/zip";

import { Article } from "../common/interface/article";
import { Category } from "../common/interface/category";
import { ContentService } from "../common/service/content.service";
import { FeaturedSection } from "../common/interface/featured-section";
import { HeadlinePipe } from "../common/pipe/headline.pipe";
import { ImagesPipe } from "../common/pipe/images.pipe";
import { PlacelinePipe } from "../common/pipe/placeline.pipe";

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

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getFeaturedSections().subscribe(data => {
      this.aside = data.find(section => section.description === "Aside");
      this.main = data.find(section => section.description === "Main");
      this.opinion = data.find(section => section.description === "Opinion");
      this.travel = data.find(section => section.description === "Travel");
    });
  }
}
