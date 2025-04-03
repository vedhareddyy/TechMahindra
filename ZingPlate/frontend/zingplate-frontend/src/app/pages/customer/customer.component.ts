import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FoodService } from '../../services/food.service';

@Component({
  standalone: true,
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [CommonModule]
})
export class CustomerComponent {
  foodItems: any[] = [];
  totalAmount: number = 0;

  constructor(private foodService: FoodService, private router: Router) {
    this.foodService.foodItems$.subscribe(items => {
      this.foodItems = items.map(food => ({
        ...food, 
        quantity: food.quantity ?? 0 
      }));
      this.calculateTotal();
    });
  }

  increaseQuantity(food: any) {
    food.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(food: any) {
    if (food.quantity > 0) {
      food.quantity--;
      this.calculateTotal();
    }
  }

  calculateTotal() {
    this.totalAmount = this.foodItems.reduce((total, food) => total + food.price * food.quantity, 0);
  }

  goToCheckout() {
    if (this.totalAmount === 0) {
      alert('Your cart is empty!');
      return;
    }

    // ✅ Retrieve previous orders from local storage
    let previousOrders = JSON.parse(localStorage.getItem('previousOrders') || '[]');

    // ✅ Add the current order with timestamp
    previousOrders.push({
      date: new Date().toLocaleString(),
      items: this.foodItems.filter(item => item.quantity > 0),
      total: this.totalAmount
    });

    // ✅ Save back to local storage
    localStorage.setItem('previousOrders', JSON.stringify(previousOrders));

    // ✅ Save current cart & navigate to checkout
    localStorage.setItem('cart', JSON.stringify(this.foodItems));
    this.router.navigate(['/checkout']);
  }

  goToPreviousOrders() {
    this.router.navigate(['/previous-orders']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/customer-login']);
  }
}
