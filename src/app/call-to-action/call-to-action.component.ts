import { Component } from "@angular/core";
import { Input } from "@angular/core";

@Component({
  selector: "app-call-to-action",
  templateUrl: "./call-to-action.component.html",
  styleUrls: [
    "./call-to-action.component.scss"
  ]
})
export class CallToActionComponent {
  @Input() action: string;

  public isAnimated = false;
  private isHovered = false;

  public onMouseover(): void {
    this.isAnimated = true;
    this.isHovered = true;
  }

  public onMouseout(): void {
    this.isHovered = false;
  }

  public onClick(): void {
    this.isHovered = false;
  }

  public onAnimationiteration(): void {
    if (!this.isHovered) {
      this.isAnimated = false;
    }
  }
}
