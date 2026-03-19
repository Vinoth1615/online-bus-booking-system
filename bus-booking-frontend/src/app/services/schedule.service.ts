import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ScheduleService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchSchedules(origin: string, destination: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/schedules/search?origin=${origin}&destination=${destination}`);
  }

  getAllSchedules(): Observable<any> {
    return this.http.get(`${this.apiUrl}/schedules`);
  }
}