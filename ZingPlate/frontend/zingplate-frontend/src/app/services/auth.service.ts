import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  constructor(private router: Router) {}

  register(user: any) {
    this.users.push(user);
    console.log('Users:', this.users);
  }

  login(email: string, password: string) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('userType', user.userType);
      if (user.userType === 'customer') {
        this.router.navigate(['/customer']);
      } else {
        this.router.navigate(['/restaurant']);
      }
    } else {
      alert('Invalid credentials');
    }
  }
}
