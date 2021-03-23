// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { ActivitiesComponent } from './activities.component';
import { ActivitiesMenuComponent } from './components/activities-menu/activities-menu.component';


@NgModule({
  declarations: [
    ActivitiesComponent, 
    ActivitiesMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
