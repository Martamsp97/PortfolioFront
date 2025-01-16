import { Component, HostListener, inject } from '@angular/core';
import { IFullstack } from '../../interfaces/ifullstack.type=interfaces';
import { ProyectosService } from '../../services/proyectos.service';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ExperienciaService } from '../../services/experiencia.service';
import { IExperiencia } from '../../interfaces/iexperiencia.type=interfaces';
import { IEstudios } from '../../interfaces/iestudios.type=interfaces';
import { EstudiosService } from '../../services/estudios.service';
import { IUxui } from '../../interfaces/iuxui.type=interfaces';
import { IIlustracion } from '../../interfaces/iilustracion.type=interfaces';
import { IFoto } from '../../interfaces/ifoto.type=interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardProjectComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  experienciasService = inject(ExperienciaService)
  proyectosService = inject(ProyectosService)
  estudiosService = inject(EstudiosService)

  arrExperiencias: IExperiencia[] = [];
  arrProyFullstack: IFullstack[] = [];
  arrProyUxUi: IUxui[] = [];
  arrEstudios: IEstudios[] = [];
  ilustracion: IIlustracion | null = null;
  foto: IFoto | null = null


  async ngOnInit() {
    try {
      const response = await this.proyectosService.getAllFullstack()
      this.arrProyFullstack = response
      console.log(this.arrProyFullstack)
      const response2 = await this.proyectosService.getAllUxUi()
      this.arrProyUxUi = response2
      const experiencias: IExperiencia[] = await this.experienciasService.getAllExperiencias()
      this.arrExperiencias = experiencias
      const estudios: IEstudios[] = await this.estudiosService.getAllEstudios()
      this.arrEstudios = estudios
      const response3 = await this.proyectosService.getOneIlustracion()
      this.ilustracion = response3
      const response4 = await this.proyectosService.getOneFotografia()
      this.foto = response4
    } catch (error) {
      console.log(error)

    };

  }




  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const contacto = document.getElementById('contacto'); // Sección que activa el fondo
    const backgroundElement = document.getElementById('background1'); // Fondo a animar

    if (contacto && backgroundElement) {
      const sectionPosition = contacto.getBoundingClientRect(); // Posición de la sección
      const windowHeight = window.innerHeight;

      if (sectionPosition.top <= windowHeight && sectionPosition.bottom >= 0) {
        // Calcula opacidad basada en cuánto de la sección está visible
        const progress = Math.min(
          1,
          (windowHeight - sectionPosition.top) / sectionPosition.height
        );
        backgroundElement.style.opacity = progress.toString();
      } else {
        // Si la sección no está visible, mantén el fondo invisible
        backgroundElement.style.opacity = '0';
      }
    }
  }
}
