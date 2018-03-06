import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TestBed } from "@angular/core/testing";
import "rxjs/add/observable/of";

import { BannerComponent } from "../banner/banner.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { ContentService } from "../common/service/content.service";
import { FirstSentencePipe } from "../common/pipe/first-sentence.pipe";
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
    categoryId: 1,
    fullStory: "Full Story",
    hasVideoPlaceholder: false,
    headLine: "Headline",
    id: 1,
    location: "Location",
    nsfw: false,
    numberOfImages: 0,
    relatedArticleIds: [],
    snippet: "Snippet"
  };

  const httpResponseStub = [
    {
      articles: (new Array(2)).fill(articleStub),
      description: "Aside",
      id: 1
    },
    {
      articles: (new Array(3)).fill(articleStub),
      description: "Main",
      id: 2
    },
    {
      articles: (new Array(2)).fill(articleStub),
      description: "Opinion",
      id: 3
    },
    {
      articles: (new Array(2)).fill(articleStub),
      description: "Travel",
      id: 4
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
        ContentService,
        FirstSentencePipe
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

  it("creates an instance", () => {
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
