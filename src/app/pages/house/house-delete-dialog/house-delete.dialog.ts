import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';

@Component({
  selector: 'house-delete-dialog',
  templateUrl: 'house-delete.dialog.html',
})
export class HouseDeleteDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HouseDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: CoreHttpClientService
  ) {}
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    const path = 'house/' + this.data.id;
    this.http.delete(path).subscribe((result) => this.dialogRef.close());
  }
}
