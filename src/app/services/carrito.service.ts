import { Injectable } from '@angular/core';
import { Producto, ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito !: Producto[];

  constructor(
    private productsService : ProductosService,
  ) { }

  getAllElements () {
    return [...this.carrito];
  }

  addElement (element:Producto) {
    console.log("Se añadira: " + element.name);
    this.carrito.push(element);
  }
}
