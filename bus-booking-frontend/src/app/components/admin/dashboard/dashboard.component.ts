import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats = {
    totalBuses: 0,
    totalRoutes: 0,
    totalSchedules: 0,
    totalBookings: 0
  };

  recentBookings: any[] = [];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadStats();
  }

  loadStats() {
    this.http.get<any[]>(`${environment.apiUrl}/buses`).subscribe(res => {
      this.stats.totalBuses = res.length;
    });

    this.http.get<any[]>(`${environment.apiUrl}/routes`).subscribe(res => {
      this.stats.totalRoutes = res.length;
    });

    this.http.get<any[]>(`${environment.apiUrl}/schedules`).subscribe(res => {
      this.stats.totalSchedules = res.length;
    });

    this.http.get<any[]>(`${environment.apiUrl}/bookings/user/2`).subscribe(res => {
      this.stats.totalBookings = res.length;
      this.recentBookings = res.slice(0, 5);
      this.loading = false;
    });
  }
}