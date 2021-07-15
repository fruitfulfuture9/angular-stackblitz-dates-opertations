import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  today: number = Date.now();
  sampleDate: Date = new Date('1980-04-20');
  age: Number;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });

    this.age = this.calculateAge(this.sampleDate);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('your product is added to the cart!');
  }

  calculateAge(dob: Date): Number {
    let timeDiff = Math.abs(Date.now() - dob.getTime());
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }
}
