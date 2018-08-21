import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './modules/luxury/routing.module';

import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { LuxuryModule } from './modules/luxury/luxury.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    DashboardModule,
    LuxuryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
