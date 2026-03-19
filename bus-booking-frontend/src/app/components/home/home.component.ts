import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularRoutes = [
    { from: 'Chennai', to: 'Bangalore', duration: '6 hours', distance: '350 km', price: 450 },
    { from: 'Chennai', to: 'Coimbatore', duration: '8 hours', distance: '500 km', price: 350 },
    { from: 'Bangalore', to: 'Hyderabad', duration: '10 hours', distance: '570 km', price: 550 }
  ];
}