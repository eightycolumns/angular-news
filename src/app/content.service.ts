import { HttpClient } from "@angular/common/http";
import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { Banner } from "./banner";

@Injectable()
export class ContentService {
  constructor(private httpClient: HttpClient) {}

  public getBanners(): Observable<HttpResponse<Banner[]>> {
    return this.httpClient.get<Banner[]>(
      "http://challengenewsapi.azurewebsites.net/api/Banners",
      {
        observe: "response"
      }
    );
  }
}
