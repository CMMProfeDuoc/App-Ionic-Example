import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  producto !: Producto;


  constructor(
    private productService : ProductosService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
  ) { }

  ngOnInit() {
    //cargar los datos de un producto
    this.activatedRoute.paramMap.subscribe( paramMap => {
      const prodId = paramMap.get('productId');
      this.producto = this.productService.getProducto(prodId as string);
      console.log(this.producto); //Debug
    })
  }

  goToPage (pageURL : string ) : void {
    this.router.navigateByUrl(pageURL);
  }

  goToHome () : void {
    this.goToPage('home');
  }

  goToProductos () : void {
    this.goToPage('productos');
  }

}
