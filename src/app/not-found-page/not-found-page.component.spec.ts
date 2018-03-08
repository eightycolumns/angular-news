import { async } from "@angular/core/testing";
import { ComponentFixture} from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";

import { NotFoundPageComponent } from "./not-found-page.component";

describe("NotFoundPageComponent", () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NotFoundPageComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });
});
