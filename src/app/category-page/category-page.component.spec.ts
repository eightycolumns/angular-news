import { ActivatedRoute } from "@angular/router";
import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";

import { Article } from "../common/interface/article";
import { Category } from "../common/interface/category";
import { CategoryPageComponent } from "./category-page.component";
import { ContentService } from "../common/service/content.service";

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
    }
  ];

  const categoriesStub = [
    {
      id: 1,
      displayName: "Display Name One",
      shortName: "Short Name One"
    },
    {
      id: 2,
      displayName: "Display Name Two",
      shortName: "Short Name Two"
    }
  ];

  const contentServiceStub = {
    getArticles: (id: number): Observable<Article[]> => {
      return Observable.create(observer => observer.next(articlesStub.filter(
        article => article.categoryId === id
      )));
    },

    getCategories: (): Observable<Category[]> => {
      return Observable.create(observer => observer.next(categoriesStub));
    }
  };

  const routerStub = {
    navigateByUrl: (url: string): void => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent
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

  it("gets the category's articles from the content service", () => {
    expect(component.articles.length).toBe(1);
  });
});
