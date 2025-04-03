import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, RouterModule]
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  userType = 'customer';

  constructor(private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      alert('Please fill in all fields.');
      return;
    }

    // Choose correct storage key based on user type
    const storageKey = this.userType === 'customer' ? 'customerUsers' : 'restaurantUsers';

    // Retrieve existing users from localStorage
    let users = JSON.parse(localStorage.getItem(storageKey) || '[]');

    // Check if email is already registered
    if (users.some((u: any) => u.email === this.email)) {
      alert('Email already registered! Please log in.');
      return;
    }

    // Create new user object
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      userType: this.userType
    };

    // Add new user to array & save
    users.push(user);
    localStorage.setItem(storageKey, JSON.stringify(users));

    alert('Registration Successful! Redirecting...');

    // Redirect based on user type
    this.router.navigate([this.userType === 'customer' ? '/customer-login' : '/restaurant-login']);
  }

  // ✅ Add missing navigateToLogin() function
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
