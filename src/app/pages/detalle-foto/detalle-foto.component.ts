import { Component, inject } from '@angular/core';
import { IFoto } from '../../interfaces/ifoto.type=interfaces';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-detalle-foto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-foto.component.html',
  styleUrl: './detalle-foto.component.css'
})
export class DetalleFotoComponent {
  arrFotos: IFoto[] = [];
  fotosService = inject(ProyectosService);
  async ngOnInit() {
    this.arrFotos = await this.fotosService.getAllFotografias();

  }
}
