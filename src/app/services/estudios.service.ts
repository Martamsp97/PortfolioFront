import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IEstudios } from '../interfaces/iestudios.type=interfaces';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {
  private httpClient = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/api/estudios`;

  getAllEstudios(): Promise<IEstudios[]> {
    return lastValueFrom(
      this.httpClient.get<IEstudios[]>(`${this.baseUrl}`)
    );
  }

  getEstudiosId(estudiosId: string): Promise<IEstudios> {
    return lastValueFrom(
      this.httpClient.get<IEstudios>(`${this.baseUrl}/${estudiosId}`)
    );
  }
}
