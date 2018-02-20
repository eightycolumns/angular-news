import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ContentService {
  constructor(private httpClient: HttpClient) {}

  public getBanners() {
    return this.httpClient.get(
      "http://challengenewsapi.azurewebsites.net/api/Banners"
    );
  }
}
