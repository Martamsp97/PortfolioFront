import { Component, inject } from '@angular/core';
import { IIlustracion } from '../../interfaces/iilustracion.type=interfaces';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-detalle-ilus',
  standalone: true,
  imports: [],
  templateUrl: './detalle-ilus.component.html',
  styleUrl: './detalle-ilus.component.css'
})
export class DetalleIlusComponent {
  arrIlus: IIlustracion[] = [];
  proyectService = inject(ProyectosService);
  async ngOnInit() {
    this.arrIlus = await this.proyectService.getAllIlustraciones();

  }
}
