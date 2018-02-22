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
  public isAnimated = false;
  public isExpanded = false;
  private isHovered = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(data => {
      this.headerOne = data.body[0].message;
    });
  }

  public onMouseover(): void {
    this.isAnimated = true;
    this.isHovered = true;
  }

  public onMouseout(): void {
    this.isHovered = false;
  }

  public onAnimationIterationEnd(): void {
    if (!this.isHovered) {
      this.isAnimated = false;
    }
  }

  public onClick(): void {
    if (this.isExpanded === false && this.headerTwo === undefined) {
      this.contentService.getBanners().subscribe(data => {
        this.headerTwo = data.body[1].message;
        this.isExpanded = true;
      });
    } else {
      this.isExpanded = !this.isExpanded;
    }
  }
}
