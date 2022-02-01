import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './city.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CityDialog } from './city-dialog/city.dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CityComponent,CityDialog],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([
      {
        path: '',
        component: CityComponent,
      },
    ]),
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  entryComponents: [CityDialog],
})
export class CityModule {}
