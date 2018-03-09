import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

import { Banner } from "../common/interface/banner";
import { BannerComponent } from "../banner/banner.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { ContentService } from "../common/service/content.service";
import { FirstSentencePipe } from "../common/pipe/first-sentence.pipe";
import { FullStoryPipe } from "../common/pipe/full-story.pipe";
import { HeadlinePipe } from "../common/pipe/headline.pipe";
import { HomePageComponent } from "./home-page.component";
import { ImagesPipe } from "../common/pipe/images.pipe";
import { PlacelinePipe } from "../common/pipe/placeline.pipe";
import { RouterLinkPipe } from "../common/pipe/router-link.pipe";
import { Section } from "../common/interface/section";

describe("HomePageComponent", () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  const bannersStub = [
    {
      id: 1,
      message: "Message One"
    },
    {
      id: 2,
      message: "Message Two"
    }
  ];

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

  const featuredSectionsStub = [
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

  const contentServiceStub = {
    getBanners: (): Observable<Banner[]> => {
      return Observable.create(observer => observer.next(bannersStub));
    },

    getFeaturedSections: (): Observable<Section[]> => {
      return Observable.create(observer => observer.next(featuredSectionsStub));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent,
        CallToActionComponent,
        FullStoryPipe,
        HeadlinePipe,
        HomePageComponent,
        ImagesPipe,
        PlacelinePipe,
        RouterLinkPipe,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        FirstSentencePipe,
        {
          provide: ContentService,
          useValue: contentServiceStub
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });

  it("gets the aside content from the content service", () => {
    expect(component.aside.articles[0]).toEqual(articleStub);
    expect(component.aside.articles[1]).toEqual(articleStub);
  });

  it("gets the main content from the content service", () => {
    expect(component.main.articles[0]).toEqual(articleStub);
    expect(component.main.articles[1]).toEqual(articleStub);
    expect(component.main.articles[2]).toEqual(articleStub);
  });

  it("gets the opinion content from the content service", () => {
    expect(component.opinion.articles[0]).toEqual(articleStub);
    expect(component.opinion.articles[1]).toEqual(articleStub);
  });

  it("gets the travel content from the content service", () => {
    expect(component.travel.articles[0]).toEqual(articleStub);
    expect(component.travel.articles[1]).toEqual(articleStub);
  });
});
