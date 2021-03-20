// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules

// Components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
