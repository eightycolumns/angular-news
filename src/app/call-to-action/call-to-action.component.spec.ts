import { ComponentFixture } from "@angular/core/testing";
import { TestBed } from "@angular/core/testing";
import { async } from "@angular/core/testing";

import { CallToActionComponent } from "./call-to-action.component";

describe("CallToActionComponent", () => {
  let component: CallToActionComponent;
  let fixture: ComponentFixture<CallToActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CallToActionComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallToActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
