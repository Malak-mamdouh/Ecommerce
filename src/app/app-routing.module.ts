import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'product-detail' , 
  loadChildren: () => import('./products/product.module').then(m => m.ProductModule)},
  {path: 'cart' , component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
