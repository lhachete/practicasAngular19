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
    { descripcion: "Champiñones", precio: 125 },
    { descripcion: "Cornetos", precio: 150 },
    { descripcion: "Mandarinas", precio: 200 }
  ]);

  filtroTexto = signal('');


  getProductosFiltrados = computed(()=>
    this.productos().filter(desc => desc.descripcion.toLowerCase().includes(
      this.filtroTexto().toLowerCase()
    ))
  );

  actualizarFiltro(valor: string) {
    this.filtroTexto.set(valor);
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filtroTexto.set(inputElement.value);
  }
  

}
