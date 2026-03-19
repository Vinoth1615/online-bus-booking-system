import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchData = { origin: '', destination: '' };
  schedules: any[] = [];
  searched = false;
  loading = false;
  errorMessage = '';

  cities = ['Chennai', 'Bangalore', 'Coimbatore', 'Hyderabad', 'Mumbai', 'Delhi'];

  constructor(private scheduleService: ScheduleService, private router: Router) {}

  onSearch() {
    if (!this.searchData.origin || !this.searchData.destination) {
      this.errorMessage = 'Please select both origin and destination!';
      return;
    }
    if (this.searchData.origin === this.searchData.destination) {
      this.errorMessage = 'Origin and destination cannot be the same!';
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    this.scheduleService.searchSchedules(
      this.searchData.origin,
      this.searchData.destination
    ).subscribe({
      next: (res) => {
        this.schedules = res;
        this.searched = true;
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Something went wrong. Please try again.';
        this.loading = false;
      }
    });
  }

  selectSchedule(scheduleId: number) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return;
    }
    this.router.navigate(['/seats', scheduleId]);
  }
}