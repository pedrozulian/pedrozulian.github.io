// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Components
import { HomeComponent } from './home.component';
import { PanelComponent } from './components/panel/panel.component';



@NgModule({
  declarations: [
    HomeComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
