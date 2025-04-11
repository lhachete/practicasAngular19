import { Component, Output, EventEmitter, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  imports: [ReactiveFormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Output() resultado = new EventEmitter<Number>();

  formCalc = signal<FormGroup>(
    new FormGroup({
      num1: new FormControl(null, [Validators.required, Validators.min(1)]),
      num2: new FormControl(null, [Validators.required, Validators.min(1)]),
      operator: new FormControl(null, [Validators.required])
    })
  )

  calcular() {
    const { num1, num2, operator } = this.formCalc().value;
    if (this.formCalc().valid) {
      
    
    let resultado: number;
  
    switch (operator) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      default:
        resultado = NaN; 
    }
  
    this.resultado.emit(resultado);
  }
  
}
}
