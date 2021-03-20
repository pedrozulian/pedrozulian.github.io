// Angular Default
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules 
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './modules/layout/layout.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
