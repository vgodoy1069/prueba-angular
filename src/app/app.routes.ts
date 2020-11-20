import {Routes } from '@angular/router';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ListpedidosComponent } from './components/listpedidos/listpedidos.component';
import { AddpedidosComponent } from './components/addpedidos/addpedidos.component';

export const ROUTES: Routes = [

     { path: 'catalogo' , component: CatalogoComponent},
     { path: 'addpedidos/:idProducto', component: AddpedidosComponent },
     { path: 'listpedidos', component: ListpedidosComponent },
     { path: '', pathMatch: 'full', redirectTo: 'catalogo'},
     { path: '**', pathMatch: 'full', redirectTo: 'catalogo'}



];



