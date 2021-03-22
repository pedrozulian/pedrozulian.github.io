// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { ActivitiesComponent } from './activities.component';
import { ActivitiesSideMenuComponent } from './components/activities-side-menu/activities-side-menu.component';


@NgModule({
  declarations: [
    ActivitiesComponent, 
    ActivitiesSideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
