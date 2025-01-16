import { Component, inject, Input } from '@angular/core';
import { IFullstack } from '../../interfaces/ifullstack.type=interfaces';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-detalle-fullstack',
  standalone: true,
  imports: [],
  templateUrl: './detalle-fullstack.component.html',
  styleUrl: './detalle-fullstack.component.css'
})
export class DetalleFullstackComponent {
  @Input() fullstackId: string = "";

  Fullstack: IFullstack | null = null;
  proyectoService = inject(ProyectosService);

  async ngOnInit() {
    try {
      const response = await this.proyectoService.getFullstackId(this.fullstackId);
      this.Fullstack = response;
    } catch (error) {
      console.log(error);
    }
  }
}
