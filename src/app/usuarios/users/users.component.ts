import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent { 
  usuarios = [
    {
      nombre: "José Domínguez",
      edad: 24,
      telefono: "9514229010",
    },
    {
      nombre: "Uziel Borjas",
      edad: 22,
      telefono: "9511234576"
    }
  ]
}
