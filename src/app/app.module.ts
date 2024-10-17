import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './container/header/header.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductSearchComponent } from './container/product-search/product-search.component';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { FilterComponent } from './container/filter/filter.component';
import { ProductComponent } from './container/product/product.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductSearchComponent,
    ContainerComponent,
    FilterComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
