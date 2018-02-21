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
  public header: string;
  public isAnimated = false;
  private isHovered = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(
      data => this.header = data[0].message
    );
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
}
