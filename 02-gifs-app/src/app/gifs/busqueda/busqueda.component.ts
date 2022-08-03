import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('inputBuscar') private inputBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifService: GifService) {}

  public buscar(): void {
    const currentValue = this.inputBuscar.nativeElement.value;
    this.gifService.añadirBusqueda(currentValue);
    this.inputBuscar.nativeElement.value = '';
  }
}
