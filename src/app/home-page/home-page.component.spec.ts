import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TestBed } from "@angular/core/testing";
import "rxjs/add/observable/of";

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
  let contentService: ContentService;
  let fixture: ComponentFixture<HomePageComponent>;

  const articleStub = {
    fullStory: "Full Story",
    headLine: "Headline",
    location: "Location"
  };

  const httpResponseStub = [
    {
      description: "Aside",
      articles: (new Array(2)).fill(articleStub)
    },
    {
      description: "Main",
      articles: (new Array(3)).fill(articleStub)
    },
    {
      description: "Opinion",
      articles: (new Array(2)).fill(articleStub)
    },
    {
      description: "Travel",
      articles: (new Array(2)).fill(articleStub)
    },
  ];

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

    contentService = fixture.debugElement.injector.get(ContentService);

    spyOn(contentService, "getFeaturedSections").and.returnValue(
      Observable.of(httpResponseStub)
    );

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("gets the aside content from the content service", () => {
    expect(component.aside.articles[0].fullStory).toBe("Full Story");
    expect(component.aside.articles[1].fullStory).toBe("Full Story");
  });

  it("gets the main content from the content service", () => {
    expect(component.main.articles[0].fullStory).toBe("Full Story");
    expect(component.main.articles[1].fullStory).toBe("Full Story");
    expect(component.main.articles[2].fullStory).toBe("Full Story");
  });

  it("gets the opinion content from the content service", () => {
    expect(component.opinion.articles[0].fullStory).toBe("Full Story");
    expect(component.opinion.articles[1].fullStory).toBe("Full Story");
  });

  it("gets the travel content from the content service", () => {
    expect(component.travel.articles[0].fullStory).toBe("Full Story");
    expect(component.travel.articles[1].fullStory).toBe("Full Story");
  });
});
