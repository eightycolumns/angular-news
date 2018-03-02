import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "headline"
})
export class HeadlinePipe implements PipeTransform {
  transform(article: Article): string {
    const headline = article.headLine;

    if (headline.indexOf(":") < 0) {
      return headline;
    } else {
      const beforeColon = headline.split(":")[0];
      const afterColon = headline.split(":")[1];

      return `<span>${beforeColon}:</span><span>${afterColon}</span>`;
    }
  }
}
