import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "images"
})
export class ImagesPipe implements PipeTransform {
  transform(article: Article, n?: number): undefined[] {
    const images = Array(article.numberOfImages).fill(undefined);
    return (n === undefined) ? images : images.slice(0, n);
  }
}
