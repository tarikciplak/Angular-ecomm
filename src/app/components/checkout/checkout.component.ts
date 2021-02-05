import { OrderService } from './../../services/order.service';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';

import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  

  constructor(private cartservice: CartService, private orderservice: OrderService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 200);
    this.cartservice.cartTotal$.subscribe(toplam => this.cartTotal = toplam);
    this.cartservice.cartDataObs$.subscribe(d => this.cartData = d);
  }

  onCheckOut() {

    this.spinner.show();
    setTimeout(() => {
     this.spinner.hide();  
    }, 2000);
    this.cartservice.CheckoutFromCart(1);
    this.router.navigate(['succesful']);
    

  };

}
