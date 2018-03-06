import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

import { Article } from "../interface/article";

@Pipe({
  name: "fullStory"
})
export class FullStoryPipe implements PipeTransform {
  transform(article: Article, options = []): string {
    let fullStory = article.fullStory;

    if (options.includes("DELETE_FIRST_SENTENCE")) {
      fullStory = this.deleteFirstSentence(fullStory);
    }

    if (fullStory.indexOf("<br><br>") < 0) {
      if (options.includes("INDENT_AFTER_LINE_BREAKS")) {
        fullStory = this.indentAfterLineBreaks(fullStory);
      }

      if (options.includes("INSERT_PHOTO") && article.numberOfImages > 0) {
        fullStory = this.insertPhoto(fullStory);
      }
    } else {
      if (options.includes("INSERT_PHOTO") && article.numberOfImages > 0) {
        fullStory = this.insertPhoto(fullStory);
      }

      if (options.includes("INDENT_AFTER_LINE_BREAKS")) {
        fullStory = this.indentAfterLineBreaks(fullStory);
      }
    }

    return fullStory;
  }

  private deleteFirstSentence(fullStory: string): string {
    const firstSentence = fullStory.split(/^(.*?[.!?]\s+)/)[1];
    return fullStory.replace(firstSentence, "").trim();
  }

  private indentAfterLineBreaks(fullStory: string): string {
    const indent = "<span class=\"indent\"></span>";
    return fullStory.replace(/<br>/g, `<br>${indent}`);
  }

  private insertPhoto(fullStory: string): string {
    if (fullStory.indexOf("<br><br>") < 0) {
      let numberOfLineBreakElements = 0;

      return fullStory.replace(/<br>/g, (lineBreakElement: string) => {
        numberOfLineBreakElements += 1;

        if (numberOfLineBreakElements === 2) {
          return `${lineBreakElement}<div class="photo">[PHOTO]</div>`;
        } else {
          return lineBreakElement;
        }
      });
    } else {
      return fullStory.replace(
        "<br><br>", "<div class=\"photo\">[PHOTO]</div>"
      );
    }
  }
}
