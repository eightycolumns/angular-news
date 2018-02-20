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

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getBanners().subscribe(
      data => this.header = data[0].message
    );
  }
}
