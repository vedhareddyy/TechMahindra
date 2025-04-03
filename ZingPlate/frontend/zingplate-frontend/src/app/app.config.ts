import { provideRouter, Routes } from '@angular/router';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { RestaurantLoginComponent } from './pages/restaurant-login/restaurant-login.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer-login', pathMatch: 'full' },
  { path: 'customer-login', component: CustomerLoginComponent },
  { path: 'restaurant-login', component: RestaurantLoginComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'restaurant', component: RestaurantComponent },
];

export const appConfig = {
  providers: [provideRouter(routes)]
};
