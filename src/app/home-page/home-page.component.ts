import { Component } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import "rxjs/add/observable/zip";

import { Article } from "../common/interface/article";
import { ContentService } from "../common/service/content.service";
import { Section } from "../common/interface/section";
import { RouterLinkPipe } from "../common/pipe/router-link.pipe";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: [ "./home-page.component.scss" ]
})
export class HomePageComponent implements OnInit {
  public httpErrorResponse: HttpErrorResponse;

  public aside: Section;
  public main: Section;
  public opinion: Section;
  public travel: Section;

  public opinionFullStoryOptions: string[];

  constructor(private contentService: ContentService, private titleService: Title) {
    this.opinionFullStoryOptions = [
      "INSERT_PHOTO"
    ];
  }

  ngOnInit(): void {
    this.titleService.setTitle("CapTech News");

    this.contentService.getFeaturedSections().subscribe(
      (sections: Section[]) => {
        this.aside = sections.find((section: Section) => section.description === "Aside");
        this.main = sections.find((section: Section) => section.description === "Main");
        this.opinion = sections.find((section: Section) => section.description === "Opinion");
        this.travel = sections.find((section: Section) => section.description === "Travel");
      },
      (httpErrorResponse: HttpErrorResponse) => this.httpErrorResponse = httpErrorResponse
    );
  }
}
