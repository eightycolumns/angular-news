import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { ArticlePageComponent } from "../article-page/article-page.component";
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
  },
  {
    path: "article/:headline",
    component: ArticlePageComponent
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
