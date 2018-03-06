import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "fullStory"
})
export class FullStoryPipe implements PipeTransform {
  transform(article: Article, options = ""): string {
    let fullStory = article.fullStory;

    const deleteFirstSentence = options.split("|").includes(
      "DELETE_FIRST_SENTENCE"
    );

    if (deleteFirstSentence) {
      const firstSentence = fullStory.split(/^(.*?[.!?]\s+)/)[1];
      fullStory = fullStory.replace(firstSentence, "").trim();
    }

    const indentAfterLineBreaks = options.split("|").includes(
      "INDENT_AFTER_LINE_BREAKS"
    );

    if (indentAfterLineBreaks) {
      fullStory = fullStory.replace(
        /<br>/g, "<br><span class=\"indent\"></span>"
      );
    }

    const insertPhoto = options.split("|").includes("INSERT_PHOTO");

    if (insertPhoto && article.numberOfImages > 0) {
      fullStory = fullStory.replace(
        "<br><br>", "<div class=\"photo\">[PHOTO]</div>"
      );

      let numberOfLineBreakElements = 0;

      fullStory = fullStory.replace(/<br>/g, (match: string) => {
        numberOfLineBreakElements += 1;

        if (numberOfLineBreakElements === 2) {
          return `${match}<div class="photo">[PHOTO]</div>`;
        } else {
          return match;
        }
      });
    }

    return fullStory;
  }
}
