import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { ArticlePageComponent } from "./article-page/article-page.component";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { ContentService } from "./common/service/content.service";
import { FirstSentencePipe } from "./common/pipe/first-sentence.pipe";
import { FullStoryPipe } from "./common/pipe/full-story.pipe";
import { HeaderComponent } from "./header/header.component";
import { HeadlinePipe } from "./common/pipe/headline.pipe";
import { HomePageComponent } from "./home-page/home-page.component";
import { HtmlEntitiesPipe } from "./common/pipe/html-entities.pipe";
import { ImagesPipe } from "./common/pipe/images.pipe";
import { PlacelinePipe } from "./common/pipe/placeline.pipe";
import { RouterLinkPipe } from "./common/pipe/router-link.pipe";

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
    ArticlePageComponent,
    BannerComponent,
    CallToActionComponent,
    CategoryPageComponent,
    FirstSentencePipe,
    FullStoryPipe,
    HeaderComponent,
    HeadlinePipe,
    HomePageComponent,
    HtmlEntitiesPipe,
    ImagesPipe,
    PlacelinePipe,
    RouterLinkPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    ContentService,
    DatePipe,
  ]
})
export class AppModule {}
