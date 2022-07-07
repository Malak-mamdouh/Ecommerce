import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {path:'' , loadChildren: () => import('./auth/auth.module').then(mod=>mod.AuthModule)},
  {path:'' , loadChildren: () => import('./product/product.module').then(mod=>mod.ProductModule)},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'dashboard' , component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
