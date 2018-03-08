import { Component } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";

import { Banner } from "../common/interface/banner";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: [ "./banner.component.scss" ]
})
export class BannerComponent implements OnInit {
  public httpErrorResponse: HttpErrorResponse;

  public banners: Banner[];
  public isExpanded = false;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(
      (banners: Banner[]) => this.banners = banners,
      (httpErrorResponse: HttpErrorResponse) => this.httpErrorResponse = httpErrorResponse
    );
  }

  public toggleExpansion(): void {
    this.isExpanded = !this.isExpanded;
  }
}
