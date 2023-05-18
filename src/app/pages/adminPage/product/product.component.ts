import { Component } from '@angular/core';
import { User } from 'src/common/user';
import { Product } from 'src/common/product';
import { products } from 'src/app/data/data';

@Component({
  selector: 'app-admin',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class HomeComponent {
  products = products
}
