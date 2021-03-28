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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxUiLoaderConfig, NgxUiLoaderModule, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

// Components
import { AppComponent } from './app.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  'bgsColor': '#7C75FF',
  'bgsOpacity': 0.6,
  'bgsPosition': 'center-center',
  'bgsSize': 90,
  'bgsType': 'three-bounce',
  'fgsColor': '#7C75FF',
  'fgsPosition': 'center-center',
  'fgsSize': 50,
  'fgsType': 'three-bounce',
  'gap': 36,
  'logoPosition': 'center-center',
  'logoSize': 120,
  'logoUrl': '',
  'masterLoaderId': 'master',
  'overlayBorderRadius': '0',
  'overlayColor': 'rgba(40, 40, 40, 0.5)',
  'pbColor': '#7C75FF',
  'pbDirection': 'ltr',
  'pbThickness': 3,
  'hasProgressBar': true,
};
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    LayoutModule,
    HomeModule,
    ActivitiesModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
