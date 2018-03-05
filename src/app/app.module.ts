import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { ContentService } from "./common/service/content.service";
import { FullStoryPipe } from "./common/pipe/full-story.pipe";
import { HeaderComponent } from "./header/header.component";
import { HeadlinePipe } from "./common/pipe/headline.pipe";
import { HomePageComponent } from "./home-page/home-page.component";
import { ImagesPipe } from "./common/pipe/images.pipe";
import { PlacelinePipe } from "./common/pipe/placeline.pipe";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    CallToActionComponent,
    CategoryPageComponent,
    FullStoryPipe,
    HeaderComponent,
    HeadlinePipe,
    HomePageComponent,
    ImagesPipe,
    PlacelinePipe
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
