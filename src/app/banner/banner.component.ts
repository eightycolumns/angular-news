import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { Banner } from "../common/interface/banner";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: [ "./banner.component.scss" ]
})
export class BannerComponent implements OnInit {
  public banners: Banner[];
  public isExpanded = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe((banners: Banner[]) => this.banners = banners);
  }

  public toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
