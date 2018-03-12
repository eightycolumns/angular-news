import { async } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

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
import { NbspPipe } from "./common/pipe/nbsp.pipe";
import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
import { PlacelinePipe } from "./common/pipe/placeline.pipe";
import { RouterLinkPipe } from "./common/pipe/router-link.pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        NbspPipe,
        NotFoundPageComponent,
        PlacelinePipe,
        RouterLinkPipe,
      ],
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      providers: [
        ContentService,
        DatePipe,
      ]
    }).compileComponents();
  }));

  it("creates an instance", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
