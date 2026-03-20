import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BusService } from '../../../services/bus.service';

@Component({
  selector: 'app-manage-buses',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './manage-buses.component.html',
  styleUrls: ['./manage-buses.component.css']
})
export class ManageBusesComponent implements OnInit {
  buses: any[] = [];
  loading = true;
  showForm = false;
  successMessage = '';

  newBus = {
    busNumber: '',
    busName: '',
    totalSeats: 40,
    busType: 'AC'
  };

  constructor(private busService: BusService) {}

  ngOnInit() {
    this.loadBuses();
  }

  loadBuses() {
    this.busService.getAllBuses().subscribe({
      next: (res) => {
        this.buses = res;
        this.loading = false;
      }
    });
  }

  addBus() {
    this.busService.addBus(this.newBus).subscribe({
      next: () => {
        this.successMessage = 'Bus added successfully!';
        this.showForm = false;
        this.newBus = { busNumber: '', busName: '', totalSeats: 40, busType: 'AC' };
        this.loadBuses();
        setTimeout(() => this.successMessage = '', 3000);
      }
    });
  }
}