import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  @ViewChild('inputBuscar') private inputBuscar!: ElementRef<HTMLInputElement>;

  public buscar(): void {
    const currentValue = this.inputBuscar.nativeElement.value
    console.log(currentValue);
    this.inputBuscar.nativeElement.value = '';
  }
}
