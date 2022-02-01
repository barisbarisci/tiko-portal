import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';

@Component({
  selector: 'house-update-dialog',
  templateUrl: 'house-update.dialog.html',
})
export class HouseUpdateDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HouseUpdateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: CoreHttpClientService
  ) {}
  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    const path = 'house/change-price';
    this.http
      .post(path, {
        id: this.data.id,
        agentId: this.data.agentId,
        cityId: this.data.cityId,
        description: this.data.description,
        address : this.data.address,
        price : this.data.price,
        bedroomCount : this.data.bedroomCount
      })
      .subscribe((result) => this.dialogRef.close());
  }
}
