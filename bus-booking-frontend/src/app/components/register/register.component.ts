import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = { name: '', email: '', password: '', phone: '' };
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.loading = true;
    this.errorMessage = '';
    this.authService.register(this.registerData).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token, res.role, res.name);
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorMessage = 'Registration failed. Email may already be in use.';
        this.loading = false;
      }
    });
  }
}