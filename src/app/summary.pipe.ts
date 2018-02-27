import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "./article";

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(article: Article): string {
    let headline: string;

    if (article.headLine.indexOf(":") < 0) {
      headline = article.headLine;
    } else {
      const preColon = article.headLine.split(":")[0];
      const postColon = article.headLine.split(":")[1];

      headline = `<span>${preColon}:</span>${postColon}`;
    }

    const placeline = `<span class="placeline">${article.location}</span>`;
    const body = article.snippet.replace("<br><br>", "</p><p>");

    return `<h1>${headline}</h1><p>${placeline} ${body}</p>`;
  }
}
