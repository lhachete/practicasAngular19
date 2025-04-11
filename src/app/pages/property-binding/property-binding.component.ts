import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding',
  imports: [FormsModule],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
  standalone: true
})
export class PropertyBindingComponent {

  texto: string = "";

actualizarForm(evento: Event) {
  this.texto = (evento.target as HTMLInputElement).value;
}

  texto2: string = "";

}
