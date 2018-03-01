import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "fullStory"
})
export class FullStoryPipe implements PipeTransform {
  transform(article: Article): string {
    if (article.numberOfImages > 0) {
      return article.fullStory.replace(
        "<br><br>", "<div class='photo'>[PHOTO]</div>"
      );
    } else {
      return article.fullStory;
    }
  }
}
