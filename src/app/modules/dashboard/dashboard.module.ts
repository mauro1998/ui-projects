import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardAsideComponent } from './dashboard-aside/dashboard-aside.component';
import { DashboardMainContentComponent } from './dashboard-main-content/dashboard-main-content.component';
import { DashboardCarrouselItemComponent } from './dashboard-carrousel-item/dashboard-carrousel-item.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardNavbarComponent } from './dashboard-navbar/dashboard-navbar.component';
import { DashboardViewItemComponent } from './dashboard-view-item/dashboard-view-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DashboardComponent,
    DashboardAsideComponent,
    DashboardMainContentComponent,
    DashboardCarrouselItemComponent,
    DashboardContainerComponent,
    DashboardNavbarComponent,
    DashboardViewItemComponent
  ],
  exports: [
    DashboardComponent,
    DashboardAsideComponent,
    DashboardMainContentComponent,
    DashboardCarrouselItemComponent,
    DashboardContainerComponent,
    DashboardNavbarComponent,
    DashboardViewItemComponent
  ]
})
export class DashboardModule { }
