import { Component, Input, ViewChild } from '@angular/core';
import { productList } from '../../Models/Product';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  selectProduct: productList = {
    id: 0,
    description: '',
    brand: '',
    gender: '',
    is_in_inventory: false,
    name: '',
    price: 0,
    items_left: 0,
    slug: '',
  };
  sideBar: boolean = false;
  @Input()
  productListComp: ProductListComponent;

  ngOnInit() {
    console.log(this.productListComp.selectedProduct);
    this.selectProduct = this.productListComp.selectedProduct;
    this.sideBar = this.productListComp.sideBar;
  }

  onClose() {
    this.productListComp.selectedProduct = null;
  }
}
