import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';

@Component({
  selector: 'city-dialog',
  templateUrl: 'city.dialog.html',
})
export class CityDialog {
  constructor(
    public dialogRef: MatDialogRef<CityDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: CoreHttpClientService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    if (this.data.name === '') return; //must be form control todo
    const path = 'city';
    this.http
      .post(path, { name: this.data.name })
      .subscribe((result) => this.dialogRef.close());
  }
}
