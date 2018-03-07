import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "routerLink"
})
export class RouterLinkPipe implements PipeTransform {
  transform(article: Article): string {
    return `/article/${encodeURI(article.headLine)}`;
  }
}
