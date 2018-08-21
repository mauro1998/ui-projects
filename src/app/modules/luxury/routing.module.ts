import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

const routes: Routes = [{
  path: '',
  component: LuxuryComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
