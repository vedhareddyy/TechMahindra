import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ✅ Import Router
import { FoodService } from '../../services/food.service';

@Component({
  standalone: true,
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css'],
  imports: [CommonModule, FormsModule]
})
export class RestaurantComponent {
  newFood = {
    name: '',
    description: '',
    price: null,
    image: '' // ✅ Image property added
  };

  foodItems: any[] = [];

  constructor(private foodService: FoodService, private router: Router) { // ✅ Inject Router
    this.foodService.foodItems$.subscribe(items => {
      this.foodItems = items;
    });
  }

  // ✅ Handle Image Upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newFood.image = e.target.result; // ✅ Convert to Base64
      };
      reader.readAsDataURL(file);
    }
  }

  addFood() {
    if (!this.newFood.name || !this.newFood.description || this.newFood.price === null || !this.newFood.image) {
      alert('Please fill all fields including image');
      return;
    }

    this.foodService.addFoodItem({ 
      ...this.newFood, 
      price: this.newFood.price ?? 0 
    });

    alert('Food item added successfully!');

    // Clear form
    this.newFood = { name: '', description: '', price: null, image: '' };
  }

  removeFood(index: number) {
    this.foodService.removeFoodItem(index);
  }

  // ✅ Logout Function
  logout() {
    localStorage.removeItem('restaurant'); // Clear stored restaurant session
    this.router.navigate(['/restaurant-login']); // Redirect to Restaurant Login Page
  }
}
