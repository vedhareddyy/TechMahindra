import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-previous-orders',
  templateUrl: './previous-orders.component.html',
  styleUrls: ['./previous-orders.component.css'],
  imports: [CommonModule]
})
export class PreviousOrdersComponent implements OnInit {
  previousOrders: any[] = [];

  ngOnInit() {
    this.previousOrders = JSON.parse(localStorage.getItem('previousOrders') || '[]');
  }
}
