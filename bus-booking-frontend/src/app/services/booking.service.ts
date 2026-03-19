import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BookingService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createBooking(userId: number, scheduleId: number, seatId: number): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/bookings/create?userId=${userId}&scheduleId=${scheduleId}&seatId=${seatId}`,
      {}
    );
  }

  getUserBookings(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings/user/${userId}`);
  }

  cancelBooking(bookingId: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/bookings/cancel/${bookingId}`, {});
  }
}