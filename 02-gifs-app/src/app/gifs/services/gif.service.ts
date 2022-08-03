import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifService {
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
    }
    console.log(this._historial);
  }
}
