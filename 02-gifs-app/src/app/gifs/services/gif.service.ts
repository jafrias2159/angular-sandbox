import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  constructor(private http: HttpClient) {}

  public resultados: any;
  private _historial: string[] = [];

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

      this.http
        .get(
          `http://api.giphy.com/v1/gifs/search?api_key=hSySSsEOzigYv5SSeDhSUJ9z2uvsbeXm&q=${nuevaBusqueda}&limit=3`
        )
        .subscribe((resp: any) => {
          console.log(resp.data);
          this.resultados = resp.data;
        });
    }
    console.log(this._historial);
  }
}
