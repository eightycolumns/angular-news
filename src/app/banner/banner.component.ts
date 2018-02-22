import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { ContentService } from "../content.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: [
    "./banner.component.scss"
  ]
})
export class BannerComponent implements OnInit {
  public headerOne: string;
  public headerTwo: string;
  public isExpanded = false;
  public hasBeenExpanded = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(data => {
      this.headerOne = data.body[0].message;
      this.headerTwo = data.body[1].message;
    });
  }

  public toggleExpansion(): void {
    this.hasBeenExpanded = true;
    this.isExpanded = !this.isExpanded;
  }
}
