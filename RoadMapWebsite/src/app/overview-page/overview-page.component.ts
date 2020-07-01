import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { PhasePopupComponent } from "./phase-popup/phase-popup.component";

@Component({
  selector: "app-overview-page",
  templateUrl: "./overview-page.component.html",
  styleUrls: ["./overview-page.component.scss"],
})
export class OverviewPageComponent implements OnInit {
  phases = new Set(["node1", "node2", "node3", "node4", "node7", "node8"]);

  @ViewChild("mapSvg", { static: true })
  mapSvg: ElementRef;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    if (this.mapSvg === undefined) {
      //this.errorNotifier.notifyHeading('MapComponent::ngOnInit', 'Map not found!');
    }
    this.mapSvg.nativeElement.addEventListener(
      "click",
      this.onSvgClick.bind(this)
    );
  }

  private openPhaseInfo(phase: string) {
    console.log(phase);
    const dialogRef = this.dialog.open(PhasePopupComponent, {
      width: "30%",
      height: "60%",
      data: phase,
    });
  }

  private onSvgClick(event: any) {
    if (event.target) {
      // Walk up the path to try and find the group that contains the path, shield, and line
      let path = event.composedPath();
      for (let i = 0; i < path.length; ++i) {
        const node = path[i];
        if (node.id === "mapSvg") {
          console.log("top");
          // Isn't a phase
          return;
        }
        if (this.phases.has(node.id)) {
          // alert(node.id);
          this.openPhaseInfo(node.id);
          return;
        }
      }
    }
  }
}
