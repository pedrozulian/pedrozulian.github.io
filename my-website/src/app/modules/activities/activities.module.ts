import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';



@NgModule({
  declarations: [
    ActivitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ActivitiesComponent
  ]
})
export class ActivitiesModule { }
