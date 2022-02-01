import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';
import { CityDialog } from './city-dialog/city.dialog';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'name'];

  constructor(private http: CoreHttpClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getCities().subscribe((result: any) => {
      this.dataSource = result;
    });
  }

  getCities() {
    const path = 'city';
    return this.http.get(path);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CityDialog, {
      width: '250px',
      data: { name: '', animal: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getCities().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }
}
