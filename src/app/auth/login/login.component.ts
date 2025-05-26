import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  onLogin() {
    // Aquí iría la lógica de autenticación
    console.log('Intento de login con:', this.email, this.password);
    alert(`Login Intentado!\nEmail: ${this.email}\nPassword: ${this.password}`);
    // Normalmente, enviarías esto a un servicio de autenticación
  }
}
