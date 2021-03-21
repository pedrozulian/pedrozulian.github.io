// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Components
import { HomeComponent } from './home.component';
import { ActivitiesComponent } from './components/activities/activities.component';



@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
