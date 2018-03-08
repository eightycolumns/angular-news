import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";

import { ArticlePageComponent } from "../article-page/article-page.component";
import { CategoryPageComponent } from "../category-page/category-page.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { NotFoundPageComponent } from "../not-found-page/not-found-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "category/:shortName",
    component: CategoryPageComponent
  },
  {
    path: "article/:headline",
    component: ArticlePageComponent
  },
  {
    path: "not-found",
    component: NotFoundPageComponent
  },
  {
    path: "**",
    redirectTo: "/not-found",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: "/"
    },
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule {}
