import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.login(this.loginData).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token, res.role, res.name);
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Invalid email or password. Please try again.';
        this.loading = false;
      }
    });
  }
}