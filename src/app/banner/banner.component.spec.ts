import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { TestBed } from "@angular/core/testing";
import "rxjs/add/observable/of";

import { BannerComponent } from "./banner.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { ContentService } from "../content.service";

describe("BannerComponent", () => {
  let component: BannerComponent;
  let contentService: ContentService;
  let fixture: ComponentFixture<BannerComponent>;

  const httpResponseStub = [
    {
      message: "Header One"
    },
    {
      message: "Header Two"
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CallToActionComponent,
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

    contentService = fixture.debugElement.injector.get(ContentService);

    spyOn(contentService, "getBanners").and.returnValue(
      Observable.of(httpResponseStub)
    );

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("gets its headers from the content service", () => {
    expect(component.banners[0].message).toBe("Header One");
    expect(component.banners[1].message).toBe("Header Two");
  });
});
