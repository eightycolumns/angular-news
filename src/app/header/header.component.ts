import { Component } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: [
    "./header.component.scss"
  ]
})
export class HeaderComponent {
  public date: string;

  constructor(private datePipe: DatePipe) {
    this.date = datePipe.transform(new Date(), "fullDate");
  }
}
