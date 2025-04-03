import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  imports: [FormsModule]
})
export class CustomerLoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  login() {
    console.log("Attempting login with:", this.email, this.password);
  
    const storedUsers = localStorage.getItem('customerUsers');
  
    if (!storedUsers) {
      alert('No Customer account found. Please register first.');
      console.log("No customerUsers found in local storage.");
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
  
    // Find the user by email
    const user = users.find(u => u.email.trim().toLowerCase() === this.email.trim().toLowerCase());
  
    if (!user) {
      alert('User not found. Please register first.');
      console.log("No matching user found in local storage.");
      return;
    }
  
    // Compare passwords
    if (this.password.trim() === user.password.trim()) {
      alert('Login Successful! Redirecting to Customer Page...');
      this.router.navigate(['/customer']);
    } else {
      alert('Invalid Credentials!');
      console.log("Entered password doesn't match stored password.");
    }
  }
}