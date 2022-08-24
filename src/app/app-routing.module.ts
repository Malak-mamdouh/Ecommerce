import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { DataTableComponent } from './admin/data-table/data-table.component';
import { ProductAddComponent } from './admin/products/product-add/product-add.component';
import { ProductListComponent } from './admin/products/product-list/product-list.component';
import { CategoryListComponent } from './admin/categories/category-list/category-list.component';
import { CategoryAddComponent } from './admin/categories/category-add/category-add.component';

const routes: Routes = [
  {path: '' , component: HomePageComponent , pathMatch: 'full'},
  {path: 'admin-panel' , component: DashboardComponent ,  children: [
    {path: 'product-list' , component: ProductListComponent},
    {path: 'add-product' , component: ProductAddComponent},
    {path: 'category-list' , component: CategoryListComponent},
    {path: 'add-category' , component: CategoryAddComponent},
  ]},
  {path: 'product-detail' , 
  loadChildren: () => import('./products/product.module').then(m => m.ProductModule)},
  {path: 'cart' , component: CartComponent},
  {path: 'table' , component: DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
