import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookingService } from '../../services/booking.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  scheduleId!: number;
  schedule: any = null;
  seats: any[] = [];
  selectedSeat: any = null;
  loading = false;
  bookingSuccess = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private bookingService: BookingService
  ) {}

  ngOnInit() {
    this.scheduleId = Number(this.route.snapshot.paramMap.get('scheduleId'));
    this.loadSchedule();
    this.loadSeats();
  }

  loadSchedule() {
    this.http.get(`${environment.apiUrl}/schedules`).subscribe((res: any) => {
      this.schedule = res.find((s: any) => s.id === this.scheduleId);
    });
  }

  loadSeats() {
    this.http.get(`${environment.apiUrl}/buses`).subscribe((buses: any) => {
      if (buses.length > 0) {
        const busId = this.getBusIdFromSchedule();
        this.http.get(`${environment.apiUrl}/seats`).subscribe((seats: any) => {
          this.seats = seats.filter((s: any) => s.bus?.id === busId || true).slice(0, 20);
        });
      }
    });
  }

  getBusIdFromSchedule(): number {
    return this.schedule?.bus?.id || 1;
  }

  selectSeat(seat: any) {
    if (!seat.available) return;
    this.selectedSeat = this.selectedSeat?.id === seat.id ? null : seat;
  }

  confirmBooking() {
    if (!this.selectedSeat) return;
    this.loading = true;
    this.errorMessage = '';

    const userId = 2;

    this.bookingService.createBooking(userId, this.scheduleId, this.selectedSeat.id).subscribe({
      next: () => {
        this.bookingSuccess = true;
        this.loading = false;
        setTimeout(() => this.router.navigate(['/my-bookings']), 2000);
      },
      error: () => {
        this.errorMessage = 'Booking failed. Seat may already be taken.';
        this.loading = false;
      }
    });
  }
}