import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "firstSentence"
})
export class FirstSentencePipe implements PipeTransform {
  transform(article: Article): string {
    return article.fullStory.split(/^(.*?[.!?])\s+/)[1];
  }
}
