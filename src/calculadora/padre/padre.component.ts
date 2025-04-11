import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {

  resultado: Number | null = null;

  recibirResultado(numero: Number){
    this.resultado = numero;
  }

}
