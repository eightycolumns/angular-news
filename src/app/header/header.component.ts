import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpErrorResponse } from "@angular/common/http";
import { OnInit } from "@angular/core";

import { Category } from "../common/interface/category";
import { ContentService } from "../common/service/content.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [ "./header.component.scss" ]
})
export class HeaderComponent implements OnInit {
  public httpErrorResponse: HttpErrorResponse;

  public categories: Category[];
  public date: string;
  public username: string;

  constructor(private contentService: ContentService, private datePipe: DatePipe) {
    this.date = datePipe.transform(new Date(), "fullDate");
    this.username = "joshstickles";
  }

  ngOnInit(): void {
    this.contentService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories,
      (httpErrorResponse: HttpErrorResponse) => this.httpErrorResponse = httpErrorResponse
    );
  }
}
