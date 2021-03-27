import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './modules/activities/activities.component';
import { HomeComponent } from './modules/home/home.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: LayoutComponent, children: [
    { path: 'home', component: HomeComponent, loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'atividades', component: ActivitiesComponent, loadChildren: () => import('./modules/activities/activities.module').then(m => m.ActivitiesModule) }
  ] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
