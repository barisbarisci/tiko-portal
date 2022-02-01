import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';

@Component({
  selector: 'agent-add-dialog',
  templateUrl: 'agent-add.dialog.html',
})
export class AgentAddDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AgentAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: CoreHttpClientService
  ) {}
  ngOnInit(): void {
    this.getCities().subscribe((result: any) => {
      this.cities = result;
    });
  }

  cities: any = [];

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick() {
    if (this.data.name === '') return; //must be form control todo
    const path = 'agent';
    this.http
      .post(path, { name: this.data.name, cityId : this.data.cityId })
      .subscribe((result) => this.dialogRef.close());
  }

  getCities() {
    const path = 'city';
    return this.http.get(path);
  }
}
