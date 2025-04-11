import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  producto = { descripcion: "Nuevo Producto", precio: 100}
  private productos = signal([
    { descripcion: "Producto A", precio: 125 },
    { descripcion: "Producto B", precio: 150 },
    { descripcion: "Producto C", precio: 200 }
  ]);


  getProductos = computed(() => this.productos())
}
