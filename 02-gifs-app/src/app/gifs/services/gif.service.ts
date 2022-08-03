import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGIFResponse } from '../interface/gif.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  public resultados: Gif[] = [];
  private _historial: string[] = [];

  private _servicioUrl: string = 'http://api.giphy.com/v1/gifs';
  private _apiKey: string = 'hSySSsEOzigYv5SSeDhSUJ9z2uvsbeXm';
  public get historial(): string[] {
    return [...this._historial];
  }

  public añadirBusqueda(nuevaBusqueda: string): void {
    nuevaBusqueda = nuevaBusqueda.toLowerCase();
    if (
      nuevaBusqueda.trim().length !== 0 &&
      !this._historial.includes(nuevaBusqueda)
    ) {
      this._historial.unshift(nuevaBusqueda);
      this._historial = this._historial.slice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this.historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limit', '3')
      .set('q', nuevaBusqueda);
    this.http
      .get<SearchGIFResponse>(`${this._servicioUrl}/search`, { params })
      .subscribe((resp) => {
        localStorage.setItem('resultados', JSON.stringify(resp.data));
        this.resultados = resp.data;
      });
  }
}
