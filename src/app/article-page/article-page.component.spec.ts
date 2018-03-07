import { async } from "@angular/core/testing";
import { ComponentFixture} from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { ArticlePageComponent } from "./article-page.component";

describe("ArticlePageComponent", () => {
  let component: ArticlePageComponent;
  let fixture: ComponentFixture<ArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlePageComponent
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
});
