// Angular default
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }