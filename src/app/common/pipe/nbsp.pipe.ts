import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core";

@Pipe({
  name: "nbsp"
})
export class NbspPipe implements PipeTransform {
  transform(s: string): string {
    return s.replace(/ /g, "&nbsp;");
  }
}
