import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ActivitiesComponent],
  imports: [
    CommonModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
