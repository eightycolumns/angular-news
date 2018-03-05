import { ActivatedRoute } from "@angular/router";
import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { Params } from "@angular/router";
import { Router } from "@angular/router";
import { TestBed } from "@angular/core/testing";

import { Category } from "../common/interface/category";
import { CategoryPageComponent } from "./category-page.component";
import { ContentService } from "../common/service/content.service";

describe("CategoryPageComponent", () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  const paramsStub = {
    shortName: "Short Name"
  };

  const activatedRouteStub = {
    params: Observable.create(observer => observer.next(paramsStub))
  };

  const categoriesStub = [
    {
      id: 1,
      displayName: "Display Name",
      shortName: "Short Name"
    }
  ];

  const contentServiceStub = {
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

  it("gets its category from the shortName query string parameter", () => {
    expect(component.category.shortName).toBe(paramsStub.shortName);
  });
});
