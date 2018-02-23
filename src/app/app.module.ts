import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { ContentService } from "./content.service";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    CallToActionComponent,
    HeaderComponent,
    HomePageComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ContentService,
    DatePipe
  ]
})
export class AppModule {}
