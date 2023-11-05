import { Component, OnInit } from '@angular/core';
import { Producto, ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  products : Producto[] = []; //declarar products como un array vacio de tipo "any"

  constructor(
    private productosService : ProductosService,
    private router : Router,
    private carritoService : CarritoService,
  ) { }

  ngOnInit() {
    //copiar los productos del servicio hacia la pagina
    //console.log("cargando productos"); //Debug
    this.products = this.productosService.getAllProductos();
  }

  addToCarrito ( pId : string ) : void {
    const prod = this.productosService.getProducto(pId);
    this.carritoService.addElement(prod);
  }

  //en caso de requerir ir a una ubicacion distinta a las predeterminadas podemos usar esta funcion
  goToPage (pageURL : string) : void {
    this.router.navigateByUrl(pageURL);
  }

  //ya que siempre se ira a carrito o al detail, se crean funciones predefinidas
  goToCarrito () : void {
    this.goToPage('carrito');
  }

  goToDetail (pId : string) : void {
    this.goToPage('productos/' + pId);
  }

}
