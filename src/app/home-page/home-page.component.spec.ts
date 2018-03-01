import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";

import { BannerComponent } from "../banner/banner.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { ContentService } from "../common/service/content.service";
import { FullStoryPipe } from "../common/pipe/full-story.pipe";
import { HeadlinePipe } from "../common/pipe/headline.pipe";
import { HomePageComponent } from "./home-page.component";
import { ImagesPipe } from "../common/pipe/images.pipe";
import { PlacelinePipe } from "../common/pipe/placeline.pipe";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent,
        CallToActionComponent,
        FullStoryPipe,
        HeadlinePipe,
        HomePageComponent,
        ImagesPipe,
        PlacelinePipe
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        ContentService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
