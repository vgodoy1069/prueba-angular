import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {
    console.log('servicio productos');
  }

// tslint:disable-next-line: typedef
getNewReleases(){

return this.http.get('https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos');
}

// tslint:disable-next-line: typedef
getPedido( idProducto: string) {
  return this.http.get(`https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos/${idProducto}`);
}
}
