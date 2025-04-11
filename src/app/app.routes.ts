import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { ProductoTiendaComponent } from './pages/producto-tienda/producto-tienda.component';
import { PadreComponent } from '../calculadora/padre/padre.component';


export const routes: Routes = [
    {path: "", component:CounterComponent},
    {path: "forms", component:CounterComponent},
    {path: "products", component:ProductoTiendaComponent},
    {path: "calculadora", component:PadreComponent},
];
