import { ActivatedRoute } from "@angular/router";
import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { Params } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

import { Article } from "../common/interface/article";
import { Category } from "../common/interface/category";
import { CategoryPageComponent } from "./category-page.component";
import { ContentService } from "../common/service/content.service";
import { FirstSentencePipe } from "../common/pipe/first-sentence.pipe";
import { FullStoryPipe } from "../common/pipe/full-story.pipe";
import { HeadlinePipe } from "../common/pipe/headline.pipe";
import { PlacelinePipe } from "../common/pipe/placeline.pipe";
import { RouterLinkPipe } from "../common/pipe/router-link.pipe";

describe("CategoryPageComponent", () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  const activatedRouteStub = {
    params: Observable.create(observer => observer.next({
      shortName: "Short Name Two"
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
    },
    {
      categoryId: 2,
      fullStory: "Full Story Three",
      hasVideoPlaceholder: false,
      headLine: "Headline Three",
      id: 1,
      location: "Location Three",
      nsfw: false,
      numberOfImages: 0,
      relatedArticleIds: [],
      snippet: "Snippet Three"
    }
  ];

  const categoriesStub = [
    {
      displayName: "Display Name One",
      id: 1,
      shortName: "Short Name One"
    },
    {
      displayName: "Display Name Two",
      id: 2,
      shortName: "Short Name Two"
    }
  ];

  const contentServiceStub = {
    getArticlesByCategory: (id: number): Observable<Article[]> => {
      return Observable.create(observer => observer.next(
        articlesStub.filter(article => article.categoryId === id)
      ));
    },

    getCategories: (): Observable<Category[]> => {
      return Observable.create(observer => observer.next(categoriesStub));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent,
        FirstSentencePipe,
        FullStoryPipe,
        HeadlinePipe,
        PlacelinePipe,
        RouterLinkPipe,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        FirstSentencePipe,
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        },
        {
          provide: ContentService,
          useValue: contentServiceStub
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });

  it("uses the category's display name as its page title", () => {
    expect(component.titleService.getTitle()).toBe("Display Name Two");
  });

  it("gets the main article from the content service", () => {
    expect(component.mainArticle).toEqual(articlesStub[1]);
  });

  it("gets the aside articles from the content service", () => {
    expect(component.asideArticles).toEqual(articlesStub.slice(2));
  });
});
