import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [],
})
export class ResultadosComponent {

  public get resultados(){
    return this.gifService.resultados;
  }
  constructor(private gifService: GifService) {}
}
