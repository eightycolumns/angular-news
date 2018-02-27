import { async } from "@angular/core/testing";
import { DatePipe } from "@angular/common";
import { TestBed } from "@angular/core/testing";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { BannerComponent } from "./banner/banner.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { HeaderComponent } from "./header/header.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SummaryPipe } from "./summary.pipe";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BannerComponent,
        CallToActionComponent,
        HeaderComponent,
        HomePageComponent,
        SummaryPipe
      ],
      imports: [
        AppRoutingModule
      ],
      providers: [
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
