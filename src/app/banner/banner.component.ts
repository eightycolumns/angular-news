import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Banner } from "../banner";
import { ContentService } from "../content.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: [
    "./banner.component.scss"
  ]
})
export class BannerComponent implements OnInit {
  public banners: Banner[];
  public isExpanded = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(data => this.banners = data);
  }

  public toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
