// Default from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules from Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';

// Modules and Components from App
import { SharedModule } from 'src/app/shared/components/last-commits/shared.module';
import { ActivitiesComponent } from './activities.component';

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    SharedModule
  ],
  exports: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
