import { CartService } from './../../services/cart.service';

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
id:number = 1;
  
  constructor(private cartservice: CartService, private route: ActivatedRoute,
    private productService: ProductService,private spinner: NgxSpinnerService,private router:Router) { }

  ngOnInit(): void {


  }
  addToCart(){
    
    this.cartservice.AddProductToCart(this.id);
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 900);
    setTimeout(() => {
      this.router.navigate(['']);
    },
      1000);
    

  }
}
