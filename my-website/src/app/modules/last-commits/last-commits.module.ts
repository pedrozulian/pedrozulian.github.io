// Default from Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';

// Modules and Components from App
import { LastCommitsComponent } from './last-commits.component';



@NgModule({
  declarations: [
    LastCommitsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatStepperModule
  ],
  exports: [
    LastCommitsComponent
  ]
})
export class LastCommitsModule { }
