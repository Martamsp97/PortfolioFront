import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IExperiencia } from '../interfaces/iexperiencia.type=interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/experiencia`;

  getAllExperiencias(): Promise<IExperiencia[]> {
    return lastValueFrom(
      this.httpClient.get<IExperiencia[]>(`${this.baseUrl}`)
    );
  }

  getExperienciaId(experienciaId: string): Promise<IExperiencia> {
    return lastValueFrom(
      this.httpClient.get<IExperiencia>(`${this.baseUrl}/${experienciaId}`)
    );
  }
}
