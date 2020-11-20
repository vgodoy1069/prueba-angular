import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import {  HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu/menu.component';
import { AddpedidosComponent } from './components/addpedidos/addpedidos.component';
import { ListpedidosComponent } from './components/listpedidos/listpedidos.component';
import { ReactiveFormsModule } from '@angular/forms';



// IMPPORTAR RUTAS

import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    MenuComponent,
    AddpedidosComponent,
    ListpedidosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true} ),
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
