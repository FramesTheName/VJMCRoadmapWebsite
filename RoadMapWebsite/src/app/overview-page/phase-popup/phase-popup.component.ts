import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

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

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
