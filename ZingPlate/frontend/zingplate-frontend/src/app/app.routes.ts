import { Routes } from '@angular/router';
import { CustomerLoginComponent } from './pages/customer-login/customer-login.component';
import { RestaurantLoginComponent } from './pages/restaurant-login/restaurant-login.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PreviousOrdersComponent } from './pages/previous-orders/previous-orders.component';  // ✅ Import Previous Orders
import { ContactComponent } from './pages/contact/contact.component';  // ✅ Import Contact

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent }, 
  { path: 'customer-login', component: CustomerLoginComponent }, 
  { path: 'restaurant-login', component: RestaurantLoginComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'customer', component: CustomerComponent }, 
  { path: 'restaurant', component: RestaurantComponent }, 
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'previous-orders', component: PreviousOrdersComponent },  // ✅ Add Previous Orders Route
  { path: 'contact', component: ContactComponent },  // ✅ Add Contact Route
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
