import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { lastValueFrom } from 'rxjs';
import { IIlustracion } from '../interfaces/iilustracion.type=interfaces';
import { IFoto } from '../interfaces/ifoto.type=interfaces';
import { IGrafico } from '../interfaces/igrafico.type=interfaces';
import { IUxui } from '../interfaces/iuxui.type=interfaces';
import { IFullstack } from '../interfaces/ifullstack.type=interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private httpClient = inject(HttpClient);

  private baseUrlIlus = `${environment.apiUrl}/api/proyectos/ilustraciones`;
  private baseUrlFoto = `${environment.apiUrl}/api/proyectos/fotografias`;
  private baseUrlGraphic = `${environment.apiUrl}/api/proyectos/grafico`;
  private baseUrlUxUi = `${environment.apiUrl}/api/proyectos/uxui`;
  private baseUrlFullstack = `${environment.apiUrl}/api/proyectos/fullstack`;

  /*Ilustraciones  -------------------------------- */

  getAllIlustraciones(): Promise<IIlustracion[]> {
    return lastValueFrom(
      this.httpClient.get<IIlustracion[]>(`${this.baseUrlIlus}`)
    )
  }
  getIlustracionesId(ilusId: string): Promise<IIlustracion> {
    return lastValueFrom(
      this.httpClient.get<IIlustracion>(`${this.baseUrlIlus}/${ilusId}`)
    )
  }
  getOneIlustracion(): Promise<IIlustracion> {
    return lastValueFrom(
      this.httpClient.get<IIlustracion>(`${this.baseUrlIlus}/one`)
    )
  }
  /* Fotografias  -------------------------------- */

  getAllFotografias(): Promise<IFoto[]> {
    return lastValueFrom(
      this.httpClient.get<IFoto[]>(`${this.baseUrlFoto}`)
    )
  }
  getFotografiasId(fotoId: string): Promise<IFoto> {
    return lastValueFrom(
      this.httpClient.get<IFoto>(`${this.baseUrlFoto}/${fotoId}`)
    )
  }
  getOneFotografia(): Promise<IFoto> {
    return lastValueFrom(
      this.httpClient.get<IFoto>(`${this.baseUrlFoto}/one`)
    )
  }
  /* Grafico  -------------------------------- */

  getAllGraphic(): Promise<IGrafico[]> {
    return lastValueFrom(
      this.httpClient.get<IGrafico[]>(`${this.baseUrlGraphic}`)
    )
  }
  getGraphicId(graphicId: string): Promise<IGrafico> {
    return lastValueFrom(
      this.httpClient.get<IGrafico>(`${this.baseUrlGraphic}/${graphicId}`)
    )
  }

  /* UxUi -------------------------------- */

  getAllUxUi(): Promise<IUxui[]> {
    return lastValueFrom(
      this.httpClient.get<IUxui[]>(`${this.baseUrlUxUi}`)
    )
  }
  getUxUiId(uxuiId: string): Promise<IUxui> {
    return lastValueFrom(
      this.httpClient.get<IUxui>(`${this.baseUrlUxUi}/${uxuiId}`)
    )
  }

  /* Fullstack -------------------------------- */

  getAllFullstack(): Promise<IFullstack[]> {
    return lastValueFrom(
      this.httpClient.get<IFullstack[]>(`${this.baseUrlFullstack}`)
    )
  }
  getFullstackId(fullstackId: string): Promise<IFullstack> {
    return lastValueFrom(
      this.httpClient.get<IFullstack>(`${this.baseUrlFullstack}/${fullstackId}`)
    )
  }

}
