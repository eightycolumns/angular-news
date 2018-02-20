import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BannerComponent } from "./banner/banner.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    BannerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DatePipe
  ]
})
export class AppModule {}
