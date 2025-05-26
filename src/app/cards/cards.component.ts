import { ChangeDetectionStrategy, Component } from '@angular/core';
interface CardData {
  imageUrl: string;
  title: string;
  description: string;
  buttonLink: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent { 

  constructor(){

  }
  cards: CardData[] = [
    {
      imageUrl: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Card+1',
      title: 'Mi Primer Card',
      description: 'Esta es la descripción para el primer card. Es un ejemplo dinámico.',
      buttonLink: '#'
    },
    {
      imageUrl: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Card+2',
      title: 'Segundo Card Genial',
      description: 'Aquí la descripción para el segundo card. ¡Muy interesante!',
      buttonLink: '#'
    },
    {
      imageUrl: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Card+3',
      title: 'Tercer Card',
      description: 'Un texto de ejemplo más para el tercer card. Esto demuestra la flexibilidad.',
      buttonLink: '#'
    }
  ];
}
