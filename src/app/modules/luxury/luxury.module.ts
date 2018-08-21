import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuxuryComponent } from './luxury.component';

import containers from './containers';
import layout from './layout';
import modules from './modules';

const components = [
  ...containers,
  ...layout,
  ...modules,
  LuxuryComponent,
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
