import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {products} from '../products';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  today: number = Date.now();
  sampleDate: Date = new Date('1948-09-09');

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('your product is added to the cart!');
  }

}