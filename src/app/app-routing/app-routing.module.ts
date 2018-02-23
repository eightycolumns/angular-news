import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { HomePageComponent } from "../home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data: {
      title: "CapTech News"
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    }
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
