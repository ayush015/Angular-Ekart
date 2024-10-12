import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-Ekart';
  counter: number = 0;
  disabled: boolean = false;

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
