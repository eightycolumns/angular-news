import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { CategoryPageComponent } from "../category-page/category-page.component";
import { HomePageComponent } from "../home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "category/:shortName",
    component: CategoryPageComponent
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
