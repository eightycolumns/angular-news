import { ActivatedRoute } from "@angular/router";
import { async } from "@angular/core/testing";
import { ComponentFixture} from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";

import { Article } from "../common/interface/article";
import { ArticlePageComponent } from "./article-page.component";
import { ContentService } from "../common/service/content.service";

describe("ArticlePageComponent", () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  const activatedRouteStub = {
    params: Observable.create(observer => observer.next({
      headline: encodeURI("Headline Two")
    }))
  };

  const articlesStub = [
    {
      categoryId: 1,
      fullStory: "Full Story One",
      hasVideoPlaceholder: false,
      headLine: "Headline One",
      id: 1,
      location: "Location One",
      nsfw: false,
      numberOfImages: 0,
      relatedArticleIds: [],
      snippet: "Snippet One"
    },
    {
      categoryId: 2,
      fullStory: "Full Story Two",
      hasVideoPlaceholder: false,
      headLine: "Headline Two",
      id: 1,
      location: "Location Two",
      nsfw: false,
      numberOfImages: 0,
      relatedArticleIds: [],
      snippet: "Snippet Two"
    }
  ];

  const contentServiceStub = {
    getArticles: (id: number): Observable<Article[]> => {
      return Observable.create(observer => observer.next(articlesStub));
    },
  };

  const routerStub = {
    navigateByUrl: (url: string): void => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlePageComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        },
        {
          provide: ContentService,
          useValue: contentServiceStub
        },
        {
          provide: Router,
          useValue: routerStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });

  it("uses the article's headline as its page title", () => {
    expect(component.titleService.getTitle()).toBe("Headline Two");
  });
});
