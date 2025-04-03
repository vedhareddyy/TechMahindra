import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-restaurant-login',
  templateUrl: './restaurant-login.component.html',
  styleUrls: ['./restaurant-login.component.css'],
  imports: [FormsModule, RouterModule] // ✅ Ensure RouterModule is included
})
export class RestaurantLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  login() {
    const storedUsers = localStorage.getItem('restaurantUsers');
  
    if (!storedUsers) {
      alert('No restaurant account found. Please register first.');
      return;
    }
  
    const users = JSON.parse(storedUsers); // Parse as an array
    console.log("Stored users details:", users);
  
    // Ensure it's an array before proceeding
    if (!Array.isArray(users)) {
      alert('Invalid user data found!');
      console.error("Expected an array, but found:", users);
      return;
    }
  
    // Find the matching user
    const user = users.find(u => u.email.trim().toLowerCase() === this.email.trim().toLowerCase());
  
    if (!user) {
      alert('User not found. Please register first.');
      console.log("No matching user found in local storage.");
      return;
    }
  
    // Compare passwords
    if (this.password.trim() === user.password.trim()) {
      alert('Login Successful! Redirecting to Restaurant Page...');
      this.router.navigate(['/restaurant']);
    } else {
      alert('Invalid Credentials!');
      console.log("Entered password doesn't match stored password.");
    }
  }
}  
