import { async } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { FullStoryPipe } from "./common/pipe/full-story.pipe";
import { HeaderComponent } from "./header/header.component";
import { HeadlinePipe } from "./common/pipe/headline.pipe";
import { HomePageComponent } from "./home-page/home-page.component";
import { ImagesPipe } from "./common/pipe/images.pipe";
import { PlacelinePipe } from "./common/pipe/placeline.pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        CallToActionComponent,
        FullStoryPipe,
        HeaderComponent,
        HeadlinePipe,
        HomePageComponent,
        ImagesPipe,
        PlacelinePipe
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
        DatePipe
      ]
    }).compileComponents();
  }));

  it("creates an instance", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
