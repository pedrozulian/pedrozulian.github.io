// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { ActivitiesComponent } from './activities.component';
import { ActivitiesMenuComponent } from './components/activities-menu/activities-menu.component';
import { ActivitiesCommitsComponent } from './components/activities-commits/activities-commits.component';


@NgModule({
  declarations: [
    ActivitiesComponent, 
    ActivitiesMenuComponent, 
    ActivitiesCommitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
