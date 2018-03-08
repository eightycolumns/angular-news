import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
  name: "htmlEntities"
})
export class HtmlEntitiesPipe implements PipeTransform {
  transform(unencodedString: string): string {
    let encodedString = unencodedString;

    encodedString = encodedString.replace(/&/g, "&amp;");
    encodedString = encodedString.replace(/</g, "&lt;");
    encodedString = encodedString.replace(/>/g, "&gt;");
    encodedString = encodedString.replace(/"/g, "&quot;");
    encodedString = encodedString.replace(/'/g, "&apos;");

    return encodedString;
  }
}
