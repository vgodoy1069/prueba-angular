import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-addpedidos',
  templateUrl: './addpedidos.component.html',
  styleUrls: ['./addpedidos.component.css']
})
export class AddpedidosComponent implements OnInit {

formPedido: FormGroup;
submitted: boolean;
data: any = {};
pedido: any = {};
filesToUpload: any;


  constructor(private fb: FormBuilder, private router: ActivatedRoute,  private productos: ProductosService) {

    this.router.params.subscribe( params => {

       this.getPedido( params.idProducto );

       this.Formulario();
   });
  }

  ngOnInit(): void {
  }

   // tslint:disable-next-line: typedef
   get validarnombre(){
    return this.formPedido.get('nombre').invalid && this.formPedido.get('nombre').touched;

  }

  // tslint:disable-next-line: typedef
  get validarfecha(){
    return this.formPedido.get('fecha_nacimiento').invalid && this.formPedido.get('fecha_nacimiento').touched;

  }
  // tslint:disable-next-line: typedef
  get validardireccion(){
    return this.formPedido.get('direccion').invalid && this.formPedido.get('direccion').touched;

  }
  // tslint:disable-next-line: typedef
  get validarciudad(){
    return this.formPedido.get('ciudad').invalid && this.formPedido.get('ciudad').touched;

  }

  // tslint:disable-next-line: typedef
  get validarcedula(){
    return this.formPedido.get('cedula').invalid && this.formPedido.get('cedula').touched;

  }
  // tslint:disable-next-line: typedef


  // tslint:disable-next-line: typedef
  getPedido( idProducto: string ){
    this.productos.getPedido(idProducto)
    .subscribe( (data: any) => {
        console.log(data);
        this.data = data;
    });
  }
  // tslint:disable-next-line: typedef
  Formulario(){

    this.formPedido = this.fb.group({
      nombre: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      cedula: ['', Validators.required],
      filesToUpload: ['']


  });
  }

  // tslint:disable-next-line: typedef
  guardar(){

    this.submitted = true;
    if (this.formPedido.valid){
console.log(this.formPedido.value);
this.pedido = Object.assign( this.pedido , this.formPedido.value);
this.guardarLocalStorage(this.pedido);
this.formPedido.reset();
this.submitted = false;
Swal.fire(
  'Buen trabajo!',
  'Tu pedido se almaceno correctamente!',
  'success'
);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!'
      });

    }

  }
  // tslint:disable-next-line: typedef
  guardarLocalStorage(pedido){

    let pedidos = [];
    if (localStorage.getItem('Pedidos') ){
      pedidos = JSON.parse(localStorage.getItem('Pedidos'));
      pedidos = [pedido, ...pedidos];
    } else {
      pedidos = [pedido];
    }
    localStorage.setItem('Pedidos', JSON.stringify(pedidos));

  }

  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: typedef-whitespace
  // tslint:disable-next-line: typedef
  fileChangeEvent(fileInput: any){
    this.filesToUpload = (fileInput.target.files as Array <File>);
}

}
