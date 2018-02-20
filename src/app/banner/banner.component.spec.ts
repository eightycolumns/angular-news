import { ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { async } from "@angular/core/testing";

import { BannerComponent } from "./banner.component";
import { ContentService } from "../content.service";

describe("BannerComponent", () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BannerComponent
      ],
      imports: [
        HttpClientModule
      ],
      providers: [
        ContentService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
