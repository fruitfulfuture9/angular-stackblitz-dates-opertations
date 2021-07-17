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
  sampleStr: string = '1980-04-20';
  sampleDate: Date = new Date('1980-04-20');
  age: Number;
  lengthMins: number;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });

    this.age = this.calculateAge(this.sampleDate);
    let startDate: Date = new Date('2018-11-29 10:49:07.4154497');
    let endDate: Date = new Date('2018-11-29 10:59:49.9396033');

    this.lengthMins = this.calculateMins(startDate, endDate);
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

  calculateMins(startDate: Date, endDate: Date): number {
    // let startDate1 = new Date('2018-11-29 10:49:07.4154497');
    // let endDate1 = new Date('2018-11-29 10:49:49.9396033');
    let diffMs = startDate.getTime() - endDate.getTime();
    let diffMins = Math.abs(((diffMs % 86400000) % 3600000) / 60000); // minutes
    console.log(diffMins + 'minutes');

    return diffMins;
  }
}
