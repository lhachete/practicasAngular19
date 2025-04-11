import { Component } from '@angular/core';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';
import { PropertyBindingComponent } from '../property-binding/property-binding.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  imports: [ListadoProductosComponent, PropertyBindingComponent, RouterLink],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  counter = 10;
  title = "Tienda Online";
  increaseBy(vale:number){
    this.counter += vale;
  }
  resetCounter(){
    this.counter = 10;
  }


}
