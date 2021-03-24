// Angular Default
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules 
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';
import { HomeModule } from './modules/home/home.module';
import { RouterModule } from '@angular/router';
import { ActivitiesModule } from './modules/activities/activities.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    HomeModule,
    ActivitiesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
