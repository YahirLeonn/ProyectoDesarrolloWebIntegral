import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectito_4';
<<<<<<< HEAD
  constructor(){
    console.log('Funciones prueba');
    console.warn('Advertencia');
=======

  constructor(){
    console.log('nuevas Funciones');
    console.warn('cuidado');
>>>>>>> nuevas-funciones
    console.log('Prueba de conflictos');
    
    
  }
}

