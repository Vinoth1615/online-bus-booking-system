import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-manage-routes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './manage-routes.component.html',
  styleUrls: ['./manage-routes.component.css']
})
export class ManageRoutesComponent implements OnInit {
  routes: any[] = [];
  loading = true;
  showForm = false;
  successMessage = '';

  newRoute = {
    origin: '',
    destination: '',
    distanceKm: 0,
    durationHours: 0
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRoutes();
  }

  loadRoutes() {
    this.http.get<any[]>(`${environment.apiUrl}/routes`).subscribe({
      next: (res) => {
        this.routes = res;
        this.loading = false;
      }
    });
  }

  addRoute() {
    this.http.post(`${environment.apiUrl}/routes/admin/add`, this.newRoute).subscribe({
      next: () => {
        this.successMessage = 'Route added successfully!';
        this.showForm = false;
        this.newRoute = { origin: '', destination: '', distanceKm: 0, durationHours: 0 };
        this.loadRoutes();
        setTimeout(() => this.successMessage = '', 3000);
      }
    });
  }
}