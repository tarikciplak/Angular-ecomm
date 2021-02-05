import { SuccessfulComponent } from './components/successful/successful.component';
import { LoginComponent } from './components/login/login.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { HomeComponent } from './components/home/home.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './components/login/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'succesful', component: SuccessfulComponent },
  { path: 'checkout', component: CheckoutComponent,canActivate:[LoginGuard]},
  { path: 'products/category/:cat_id', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
