import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './sample/landing-page/landing-page.component';
import { CatalogComponent } from './sample/catalog/catalog.component';
import { ProductComponent } from './modules/product/product.component';
import { NotFoundComponent } from './sample/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'product',
    children: [
      {
        path: ':id',
        component: ProductComponent
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
