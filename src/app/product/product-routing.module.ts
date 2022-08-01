import { IsAuthenticatedGuard } from './../auth/user/guard/is-authenticated.guard';
import { ShowProductComponent } from './components/show-product/show-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'product' , component:ShowProductComponent , canActivate:[IsAuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
