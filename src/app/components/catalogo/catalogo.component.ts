import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent  {

  nuevosProductos: any [] = [];
  constructor(private producto: ProductosService, private router: Router ) {

    this.producto.getNewReleases()
    .subscribe(( data: any ) => {
      console.log(data);
      this.nuevosProductos = data;

      });
  }

// tslint:disable-next-line: typedef
showModal(){
  Swal.fire({
    icon: 'warning',
    title: ' Producto Agotado',
  });


}

// tslint:disable-next-line: typedef
CrearPedido(producto: any) {
  let productoId: any;
  productoId = producto.idProducto;
  console.log(productoId);

  this.router.navigate([ '/addpedidos', productoId ]);
}

}
