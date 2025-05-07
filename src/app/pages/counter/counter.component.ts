import { Component } from '@angular/core';

import { PropertyBindingComponent } from '../property-binding/property-binding.component';


@Component({
  selector: 'app-counter',
  imports: [PropertyBindingComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;
  
  increaseBy(value:number){
    this.counter += value;
  }
  resetCounter(){
    this.counter = 10;
  }


}
