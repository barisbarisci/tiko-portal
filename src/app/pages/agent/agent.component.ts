import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoreHttpClientService } from 'src/app/core/services/core.service';
import { AgentAddDialog } from './agent-add-dialog/agent-add.dialog';
import { AgentDeleteDialog } from './agent-delete-dialog/agent-delete.dialog';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css'],
})
export class AgentComponent implements OnInit {
  dataSource: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'city', 'actions'];

  constructor(private http: CoreHttpClientService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAgents().subscribe((result: any) => {
      this.dataSource = result;
    });
  }

  getAgents() {
    const path = 'agent';
    return this.http.get(path);
  }

  deleteRow(row: any) {
    this.openDeleteDialog(row.id);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgentAddDialog, {
      width: '250px',
      data: { name: '', animal: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAgents().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }

  openDeleteDialog(_id: number): void {
    const dialogRef = this.dialog.open(AgentDeleteDialog, {
      width: '250px',
      data: { id: _id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getAgents().subscribe((result: any) => {
        this.dataSource = result;
      });
    });
  }
}
