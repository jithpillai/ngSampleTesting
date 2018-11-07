import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTestingDemo';
  products = [{
    prodName: 'Pen',
    cost: 30
  },
  {
    prodName: 'Pencil',
    cost: 10
  }
];
  sumOfNumber(num1, num2) {
    return num1 + num2;
  }
  getTotal(products, index) {
    let total = 0;
    for (let p in products) {
      total = total + products[p][index];
    }
    return total
  }
}
