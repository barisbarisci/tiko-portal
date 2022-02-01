import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';
import { HouseAddDialog } from './house-add-dialog/house-add.dialog';
import { HouseDeleteDialog } from './house-delete-dialog/house-delete.dialog';
import { HouseUpdateDialog } from './house-update-dialog/house-update.dialog';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {
  dataSource: any[] = [];
  filterCity: number | null = null;
  filterAgent: number | null = null;
  cities: any = [];
  agents: any = [];
  displayedColumns: string[] = [
    'id',
    'description',
    'agent',
    'city',
    'address',
    'price',
    'nob',
    'actions',
  ];

  constructor(private http: CoreHttpClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getHouses().subscribe((result: any) => {
      this.dataSource = result;
    });
    this.getCities().subscribe((result: any) => {
      this.cities = result;
    });
    this.getAgents().subscribe((result: any) => {
      this.agents = result;
    });
  }

  getCities() {
    const path = 'city';
    return this.http.get(path);
  }
  getAgents() {
    const path = 'agent';
    return this.http.get(path);
  }
  deleteRow(row: any) {
    this.openDeleteDialog(row.id);
  }

  updateRow(row: any) {
    this.openUpdateDialog(row);
  }

  getHouses() {
    const path = 'house';
    return this.http.get(path);
  }

  onFilterChange() {
    this.getHousesFilter().subscribe((result: any) => {
      this.dataSource = result;
    });
  }

  getHousesFilter() {
    const path = 'house/filter';
    let params = new HttpParams()
      .set('cityId', this.filterCity || '')
      .set('agentId', this.filterAgent || '');
    return this.http.getFilter(path, params);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(HouseAddDialog, {
      width: '250px',
      data: { name: '', animal: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHouses().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }

  openDeleteDialog(_id: number): void {
    const dialogRef = this.dialog.open(HouseDeleteDialog, {
      width: '250px',
      data: { id: _id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHouses().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }

  openUpdateDialog(row: any): void {
    const dialogRef = this.dialog.open(HouseUpdateDialog, {
      width: '250px',
      data: row,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHouses().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }
}
