import { Component } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
  searchTerm: string = '';
  showSearchResult: boolean = false;

  onSearch() {
    this.showSearchResult = true;
  }

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;

    if (input.value === '') this.showSearchResult = false;
    else this.searchTerm = input.value;
  }
}
