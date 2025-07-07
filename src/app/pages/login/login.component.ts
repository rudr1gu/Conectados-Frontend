import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Eye, EyeOff, Mail, Lock, User } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule, // Required for [(ngModel)]
    LucideAngularModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // Register the icons for use in the template
  readonly Eye = Eye;
  readonly EyeOff = EyeOff;
  readonly Mail = Mail;
  readonly Lock = Lock;
  readonly User = User;

  email = '';
  password = '';
  rememberMe = false;
  showPassword = false;
  isLoading = false;

  @Output() switchToRegister = new EventEmitter<void>();

  async handleSubmit(event: Event) {
    event.preventDefault();
    this.isLoading = true;

    await new Promise(resolve => setTimeout(resolve, 2000));

    this.isLoading = false;
    alert('Login realizado com sucesso!');
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}