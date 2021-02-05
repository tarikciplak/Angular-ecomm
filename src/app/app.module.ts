
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';
import { SuccessfulComponent } from './components/successful/successful.component';
import { AccountService } from './services/account.service';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    CartComponent,
    CategoryComponent,
    LoginComponent,
    SuccessfulComponent,
    

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    CommonModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [LoginGuard,AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
