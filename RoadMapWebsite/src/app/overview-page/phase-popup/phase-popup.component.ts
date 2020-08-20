import { HostListener, Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
}

@Component({
  selector: "app-phase-popup",
  templateUrl: "./phase-popup.component.html",
  styleUrls: ["./phase-popup.component.scss"],
})
export class PhasePopupComponent {
  constructor(
    public dialogRef: MatDialogRef<PhasePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNextClick(newNode: string): void {
    this.data = newNode;
  }

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      var phase = this.data;
      switch (this.data) {
        case "node1":
          phase = "node2";
          break;
        case "node2":
          phase = "node3";
          break;
        case "node3":
          phase = "node4";
          break;
        case "node4":
          phase = "node8";
          break;
        case "node7":
          phase = "node1";
          break;
        default:
          break;
      }
      this.onNextClick(phase);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      var phase = this.data;
      switch (this.data) {
        case "node1":
          phase = "node7";
          break;
        case "node2":
          phase = "node1";
          break;
        case "node3":
          phase = "node2";
          break;
        case "node4":
          phase = "node3";
          break;
        case "node8":
          phase = "node4";
          break;
        default:
          break;
      }
      this.onNextClick(phase);
    }
  }
}
