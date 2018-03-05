import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { CategoryPageComponent } from "./category-page.component";

describe("CategoryPageComponent", () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CategoryPageComponent
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
});
