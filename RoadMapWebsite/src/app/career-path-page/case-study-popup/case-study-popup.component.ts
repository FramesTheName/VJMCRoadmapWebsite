import { Component, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { CaseStudy } from "../../core/models/case-study";

@Component({
  selector: "app-case-study-popup",
  templateUrl: "./case-study-popup.component.html",
  styleUrls: ["./case-study-popup.component.css"],
})
export class CaseStudyPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<CaseStudyPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CaseStudy[]
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
