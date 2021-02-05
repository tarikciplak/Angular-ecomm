
import { ProductResponse } from './../product/product';


import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Product} from '../product/product';
import { CartModelServer } from 'src/app/models/cart.model';
import { NgxSpinnerService } from 'ngx-spinner';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit {

  categories: Array<string> = ['Phone','Electronics','Camera','Smart watches','Tablet'];
  products: Product[];
  pricefilter: Array<number> = [50, 100, 150];
  cartData: CartModelServer;
  cartTotal: number;
  




  constructor(private productService: ProductService, private router: Router, public cartservice: CartService, private activatedroute: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // Arka işlem servisinden gelen verileri ana component'e ürünler olarak yerleştirir.

    this.productService.getAllProducts().pipe().subscribe((data: ProductResponse) => {
      this.products = data.products;
    });

    this.cartservice.cartTotal$.subscribe(toplam => this.cartTotal = toplam);
    this.cartservice.cartDataObs$.subscribe(d => this.cartData = d);

  }


  // Seçilen ürünün ayrıntılı bilgisinin bulunduğu comp. route edilir.
  selectProduct(id: number): void {

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 900);
    setTimeout(() => {
      this.router.navigate(['products/', id]).then();
    },
      1000);

  }
  // Seçilen ürünü sepete push eder.

  addToCart(id: number) {
    this.cartservice.AddProductToCart(id);

  }
 
  filterCategory(catName: string) {
    this.productService.getProductsFromCategory(catName).subscribe((data:ProductResponse)=> { this.products = data.products; });
    console.log(this.products);
  }
}
