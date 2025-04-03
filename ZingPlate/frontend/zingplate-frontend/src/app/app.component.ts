import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`, // ✅ RouterOutlet added
  imports: [CommonModule, RouterModule]
})
export class AppComponent {}
