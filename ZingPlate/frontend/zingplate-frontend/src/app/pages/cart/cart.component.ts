import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule]
})
export class CartComponent {
  cart = JSON.parse(localStorage.getItem('cart') || '[]');

  constructor(private router: Router) {}

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  checkout() {
    if (this.cart.length === 0) {
      alert('Your cart is empty. Add some food first!');
      return;
    }
    this.router.navigate(['/checkout']); // Redirect to the checkout page
  }
}
