// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

// Components
import { ActivitiesComponent } from './activities.component';
import { ActivitiesMenuComponent } from './components/activities-menu/activities-menu.component';
import { ActivitiesCommitsComponent } from './components/activities-commits/activities-commits.component';
import { ActivitiesRepositoriesComponent } from './components/activities-repositories/activities-repositories.component';


@NgModule({
  declarations: [
    ActivitiesComponent, 
    ActivitiesMenuComponent, 
    ActivitiesCommitsComponent, 
    ActivitiesRepositoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxPaginationModule,
    NgbPopoverModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [ActivitiesComponent]
})
export class ActivitiesModule { }
