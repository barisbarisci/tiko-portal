import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AgentAddDialog } from './agent-add-dialog/agent-add.dialog';
import { MatSelectModule } from '@angular/material/select';
import { AgentDeleteDialog } from './agent-delete-dialog/agent-delete.dialog';

@NgModule({
  declarations: [AgentComponent,AgentAddDialog,AgentDeleteDialog],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: AgentComponent,
      },
    ]),
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule
  ],
  entryComponents: [AgentAddDialog,AgentDeleteDialog],
})
export class AgentModule {}
