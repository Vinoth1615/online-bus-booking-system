import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageBusesComponent } from './components/admin/manage-buses/manage-buses.component';
import { ManageRoutesComponent } from './components/admin/manage-routes/manage-routes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchComponent },
  { path: 'seats/:scheduleId', component: SeatSelectionComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/buses', component: ManageBusesComponent },
  { path: 'admin/routes', component: ManageRoutesComponent },
  { path: '**', redirectTo: '' }
];