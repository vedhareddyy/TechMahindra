import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private foodItemsSubject = new BehaviorSubject<any[]>(this.loadFoodItems());
  foodItems$ = this.foodItemsSubject.asObservable();

  constructor() {}

  private loadFoodItems() {
    const storedFood = localStorage.getItem('foodItems');
    return storedFood ? JSON.parse(storedFood) : [];
  }

  private saveFoodItems(items: any[]) {
    localStorage.setItem('foodItems', JSON.stringify(items));
    this.foodItemsSubject.next(items);
  }

  addFoodItem(food: any) {
    const currentItems = this.loadFoodItems();
    currentItems.push(food);
    this.saveFoodItems(currentItems);
  }

  removeFoodItem(index: number) {
    const currentItems = this.loadFoodItems();
    currentItems.splice(index, 1);
    this.saveFoodItems(currentItems);
  }
}
