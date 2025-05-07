import { Component } from '@angular/core';
import { Producto } from '../producto/producto.model';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-producto-tienda',
  imports: [FormsModule, ProductoComponent],
  templateUrl: './producto-tienda.component.html',
  styleUrl: './producto-tienda.component.css'
})
export class ProductoTiendaComponent {

  title = "Tienda Online";
  inputDesc: string = "";
  inputNumb: number | null  = null;

  listadoProductos: Producto[] = [
    new Producto('Pantalón', 120),
    new Producto('Camisa', 20)
  ];

  insertarProducto() {
    console.log(this.listadoProductos);
    if(this.inputDesc.trim() !== "" && this.inputNumb !== null && this.inputNumb > 0 ){
      const producto = new Producto(this.inputDesc, this.inputNumb);
      this.listadoProductos = [...this.listadoProductos, producto];
      this.inputDesc = "";
      this.inputNumb = null;
    }
  }




}
