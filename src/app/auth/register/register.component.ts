import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {

  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden!');
      return;
    }
    // Aquí iría la lógica de registro
    console.log('Intento de registro con:', this.fullName, this.email, this.password);
    alert(`Registro Intentado!\nNombre: ${this.fullName}\nEmail: ${this.email}\nPassword: ${this.password}`);
    // Normalmente, enviarías esto a un servicio de registro
  }
 }
