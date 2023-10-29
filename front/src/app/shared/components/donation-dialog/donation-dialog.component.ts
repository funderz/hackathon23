import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'fundrz-donation-dialog',
  templateUrl: './donation-dialog.component.html',
  styleUrls: ['./donation-dialog.component.scss']
})
export class DonationDialogComponent {
  constructor(public dialogRef: MatDialogRef<DonationDialogComponent>) {}
}
