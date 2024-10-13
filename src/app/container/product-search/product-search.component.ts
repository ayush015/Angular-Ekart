import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.css',
})
export class ProductSearchComponent {
  searchTerm: string = '';
  showSearchResult: boolean = false;

  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter<string>();

  onSearch() {
    this.showSearchResult = true;
    this.clickEvent.emit(this.searchTerm);
  }

  handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.value === '') {
      this.showSearchResult = false;
      this.searchTerm = '';
    } else this.searchTerm = input.value;
  }
}
