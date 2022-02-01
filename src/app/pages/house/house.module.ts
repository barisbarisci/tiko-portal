import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseComponent } from './house.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HouseAddDialog } from './house-add-dialog/house-add.dialog';
import { MatSelectModule } from '@angular/material/select';
import { HouseDeleteDialog } from './house-delete-dialog/house-delete.dialog';
import { HouseUpdateDialog } from './house-update-dialog/house-update.dialog';

@NgModule({
  declarations: [
    HouseComponent,
    HouseAddDialog,
    HouseDeleteDialog,
    HouseUpdateDialog,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: HouseComponent,
      },
    ]),
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
  ],
  entryComponents: [HouseAddDialog, HouseDeleteDialog, HouseUpdateDialog],
})
export class HouseModule {}
