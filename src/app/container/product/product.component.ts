import { Component, Input } from '@angular/core';
import { productList } from '../../Models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  counter: number = 0;
  disabled: boolean = false;

  @Input()
  product: productList;

  increment() {
    this.disabled = false;
    this.counter++;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter--;
    } else {
      this.disabled = true;
    }
  }
}
