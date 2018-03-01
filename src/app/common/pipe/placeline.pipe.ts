import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "placeline"
})
export class PlacelinePipe implements PipeTransform {
  transform(article: Article): string {
    return article.location.toUpperCase();
  }
}
