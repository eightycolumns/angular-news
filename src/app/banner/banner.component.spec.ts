import { async } from "@angular/core/testing";
import { ComponentFixture } from "@angular/core/testing";
import { Observable } from "rxjs/Observable";
import { TestBed } from "@angular/core/testing";

import { Banner } from "../common/interface/banner";
import { BannerComponent } from "./banner.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { ContentService } from "../common/service/content.service";

describe("BannerComponent", () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  const bannersStub = [
    {
      id: 1,
      message: "Message One"
    },
    {
      id: 2,
      message: "Message Two"
    }
  ];

  const contentServiceStub = {
    getBanners: (): Observable<Banner[]> => {
      return Observable.create(observer => observer.next(bannersStub));
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CallToActionComponent,
        BannerComponent,
      ],
      providers: [
        {
          provide: ContentService,
          useValue: contentServiceStub
        },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("creates an instance", () => {
    expect(component).toBeTruthy();
  });

  it("gets its content from the content service", () => {
    expect(component.banners).toEqual(bannersStub);
  });
});
