import { Injectable } from '@angular/core';

//Se pueden declarar Modelos en un servicio, pero deben declararse ANTES del Injectable
export interface Producto {
  id : string,
  name : string,
  count : number,
  price: number,
  imageURL? : string,
  coments? : string[], //el signo "?" indica que la variable es opcional en el modelo
}
//Esto es recomendado si el servicio y el modelo van a estar fuertemente vinculados como en este caso
//Si un modelo no esta vinculado a un servivio especifico, es mejor declararlo por separado!

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos : Producto[] = [
    {
      id:'jakyfaljk',
      name:'coca-cola',
      count: 3,
      price: 1500,
    }
  ];

  constructor() { }

  getAllProductos () : Producto[] {
    return [...this.productos];
  }

  getProducto (pId : string) : Producto {
    return {
      ...this.productos.find ( prod => {
        return prod.id === pId;
      })
    } as Producto; //con esto se obliga a que la funcion devuelva un dato de tipo "Producto"
  }

  addProducto (prod : Producto) : void {
    this.productos.push(prod);
  }

  //fx set id

}
