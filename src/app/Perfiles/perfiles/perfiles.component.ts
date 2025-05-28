import { ChangeDetectionStrategy, Component } from '@angular/core';
interface UserProfile {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  socialMedia?: { // Propiedad opcional
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}
@Component({
  selector: 'app-perfiles',
  standalone: true,
  imports: [],
  templateUrl: './perfiles.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilesComponent { 

  profile: UserProfile; // Declara una propiedad para almacenar los datos del perfil

  constructor() {
    // Inicializamos el perfil con datos de ejemplo
    // En una aplicación real, estos datos vendrían de un servicio (API)
    this.profile = {
      name: 'Ana María López',
      role: 'Desarrolladora Frontend Senior',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', // URL de una imagen de ejemplo
      bio: 'Apasionada por la creación de interfaces de usuario intuitivas y atractivas. Experta en Angular, React y diseño responsivo.',
      email: 'ana.lopez@example.com',
      phone: '+52 55 1234 5678', // Ejemplo de número de teléfono en México
      location: 'Ciudad de México, México',
      socialMedia: {
        linkedin: 'https://www.linkedin.com/in/anamarialopez',
        github: 'https://github.com/anamarialopezdev'
        // twitter: 'https://twitter.com/anamarialopez' // Si quieres agregar Twitter
      }
    };
  }

  ngOnInit(): void {
    // Aquí puedes cargar datos de un servicio si los necesitaras dinámicamente
    // Por ejemplo: this.profileService.getProfile('user-id').subscribe(data => this.profile = data);
  }
}

