import { Component, Input } from '@angular/core';
import { IFullstack } from '../../interfaces/ifullstack.type=interfaces';
import { IUxui } from '../../interfaces/iuxui.type=interfaces';
import { IIlustracion } from '../../interfaces/iilustracion.type=interfaces';
import { IFoto } from '../../interfaces/ifoto.type=interfaces';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.css'
})
export class CardProjectComponent {
  @Input() fullstack: IFullstack | null = null;
  @Input() uxui: IUxui | null = null;
  @Input() ilus: IIlustracion | null = null;
  @Input() foto: IFoto | null = null;
}
