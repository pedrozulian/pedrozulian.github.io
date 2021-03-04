import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastCommitsComponent } from './last-commits.component';



@NgModule({
  declarations: [
    LastCommitsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LastCommitsComponent
  ]
})
export class SharedModule { }
