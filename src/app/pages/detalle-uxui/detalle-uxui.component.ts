import { Component, inject, Input } from '@angular/core';
import { IUxui } from '../../interfaces/iuxui.type=interfaces';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-detalle-uxui',
  standalone: true,
  imports: [],
  templateUrl: './detalle-uxui.component.html',
  styleUrl: './detalle-uxui.component.css'
})
export class DetalleUxuiComponent {
  @Input() uxuiId: string = "";


  uxui: IUxui | null = null;
  proyectoService = inject(ProyectosService);

  async ngOnInit() {
    try {
      const response = await this.proyectoService.getUxUiId(this.uxuiId);
      this.uxui = response;
    } catch (error) {
      console.log(error);
    }
  }
}
