// Default from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules from Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

// Modules and Components from App
import { ActivitiesComponent } from './activities.component';
import { LastCommitsModule } from '../last-commits/last-commits.module';

@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatTabsModule,
    LastCommitsModule
  ],
  exports: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
