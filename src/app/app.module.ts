import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { ContentService } from "./content.service";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ContentService,
    DatePipe
  ]
})
export class AppModule {}
