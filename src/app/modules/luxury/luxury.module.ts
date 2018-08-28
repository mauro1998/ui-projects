import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuxuryComponent } from './luxury.component';
import { LandingPageComponent } from './sample/landing-page/landing-page.component';
import { CatalogComponent } from './sample/catalog/catalog.component';

import containers from './containers';
import layout from './layout';
import modules from './modules';
import { CatalogFiltersComponent } from './sample/catalog-filters/catalog-filters.component';

const components = [
  ...containers,
  ...layout,
  ...modules,
  LuxuryComponent,
  LandingPageComponent,
  CatalogComponent,
  CatalogFiltersComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: components,
  exports: components,
})
export class LuxuryModule { }
