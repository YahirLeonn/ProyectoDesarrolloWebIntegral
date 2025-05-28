import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ProductCard {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent { 
  products: ProductCard[] = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 100,
      imageUrl: 'https://imgs.search.brave.com/cRmaqYuV7CAdYS-X624XnLzGbTbsZczFDhAE_Xzx5To/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF85/MTgxNzgtTUxBNzE3/ODMwODg0NDRfMDky/MDIzLUYud2VicA',
      description: 'Último modelo con cámara de 108MP y pantalla AMOLED'
    },
    {
      id: 2,
      name: 'Samsung s22',
      price: 1299.99,
      imageUrl: 'https://imgs.search.brave.com/bkXYm8pbPulDLMRlBk__gPfyV_SeqStb7KFSZQwStXc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS5teC9tZy9n/bS8zcHAvYXNyL2I3/MDQ1ODc3LWQwNWEt/NGM1YS04OGM0LWMz/YmU2Y2I3YjZlNS4w/MWU4ZmUxZDc5NTBm/ZjhlMTE3OWIyYzgz/OTNmNmMzMS5qcGVn/P29kbkhlaWdodD02/MTImb2RuV2lkdGg9/NjEyJm9kbkJnPUZG/RkZGRg',
      description: '16GB RAM, 1TB SSD, procesador de última generación'
    },
    {
      id: 3,
      name: 'Iphone 12 pro',
      price: 750.50,
      imageUrl: 'https://imgs.search.brave.com/GE2FM8GcLp23HGxabjfosYChIbxPY9Mq70EX1-ioWAs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGV2/ZXJjZWwubXgvY2Ru/L3Nob3AvZmlsZXMv/QmFjay1zaWRlXzEy/LVByb19QYWNpZmlj/LUJsdWVfMTIwMHgu/anBnP3Y9MTc0MDc3/ODM2MA',
      description: 'Cancelación de ruido y 30 horas de batería'
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 249.99,
      imageUrl: 'https://imgs.search.brave.com/eFKxy281YCk8PKMCCkUZNSMh2bqcgAH_E2adoXrTWUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzg1LzUxLzU2/LzM2MF9GXzg1NTE1/NjY4X2RiTW1PakNo/bjNuTmdwbDh2S2xR/N0lYdEhnYm9pdVBC/LmpwZw',
      description: 'Monitorización de salud y notificaciones inteligentes'
    }, 
    {
      id: 5,
      name: 'Xiaomi 14',
      price: 950.50,
      imageUrl: 'https://elektra.vtexassets.com/arquivos/ids/9646965-1200-auto?v=638709122066170000&width=1200&height=auto&aspect=true',
      description: 'Cancelación de ruido y 30 horas de batería'
    },
  ];
}
