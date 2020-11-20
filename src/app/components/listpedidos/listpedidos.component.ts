import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listpedidos',
  templateUrl: './listpedidos.component.html',
  styleUrls: ['./listpedidos.component.css']
})
export class ListpedidosComponent implements OnInit {
  lista: any = {};
  showEmp: boolean;


  constructor() { }

  ngOnInit(): void {

    this.lista = JSON.parse(localStorage.getItem('Pedidos'));
    if (this.lista !== null){
      this.showEmp = true;
     }else{
     this.showEmp = false;

     }

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): void{
  }

}
