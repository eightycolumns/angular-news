import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

import { Category } from "../common/interface/category";
import { ContentService } from "../common/service/content.service";
import { HeaderComponent } from "./header.component";
import { HtmlEntitiesPipe } from "../common/pipe/html-entities.pipe";
import { NbspPipe } from "../common/pipe/nbsp.pipe";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
    getCategories: (): Observable<Category[]> => {
      return Observable.create(observer => observer.next(categoriesStub));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        HtmlEntitiesPipe,
        NbspPipe,
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        DatePipe,
        {
          provide: ContentService,
          useValue: contentServiceStub
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });

  it("gets its navbar categories from the content service", () => {
    expect(component.categories).toEqual(categoriesStub);
  });
});
