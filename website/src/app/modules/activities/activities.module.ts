// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { ActivitiesComponent } from './activities.component';


@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
