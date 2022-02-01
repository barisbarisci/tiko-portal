import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';

@Component({
  selector: 'house-add-dialog',
  templateUrl: 'house-add.dialog.html',
})
export class HouseAddDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HouseAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: CoreHttpClientService
  ) {}
  ngOnInit(): void {
    this.getCities().subscribe((result: any) => {
      this.cities = result;
    });
    this.getAgents().subscribe((result: any) => {
      this.agents = result;
    });
  }

  cities: any = [];
  agents: any = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    const path = 'house';
    this.http
      .post(path, {
        agentId: this.data.agentId,
        cityId: this.data.cityId,
        description: this.data.description,
        address : this.data.address,
        price : this.data.price,
        bedroomCount : this.data.bedroomCount
      })
      .subscribe((result) => this.dialogRef.close());
  }

  getCities() {
    const path = 'city';
    return this.http.get(path);
  }
  getAgents() {
    const path = 'agent';
    return this.http.get(path);
  }
}
