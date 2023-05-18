import { Component } from '@angular/core';
import { Product } from 'src/common/product';
import { products } from 'src/app/data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeLayoutComponent {
  products = products;
}
