import { APP_BASE_HREF } from "@angular/common";
import { async } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";

describe("AppComponent", () => {
  const routes: Routes = [
    {
      path: "",
      component: HomePageComponent,
      data: {
        title: "CapTech News"
      }
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        CallToActionComponent,
        HeaderComponent,
        HomePageComponent
      ],
      imports: [
        RouterModule.forRoot(routes)
      ],
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: "/"
        },
        DatePipe
      ]
    }).compileComponents();
  }));

  it("should create the app", async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
