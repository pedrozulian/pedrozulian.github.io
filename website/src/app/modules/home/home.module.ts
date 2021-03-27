// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './home.component';
import { PanelComponent } from './components/panel/panel.component';
import { PanelItemComponent } from './components/panel-item/panel-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent,
    PanelItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
