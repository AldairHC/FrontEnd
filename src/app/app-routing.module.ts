import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { EditarComponent } from './usuario/editar/editar.component';
import { DetalleComponent } from './usuario/detalle/detalle.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { RegistrarPlatillosComponent } from './platillos/registrar-platillos/registrar-platillos.component';
import { DetallePlatillosComponent } from './platillos/detalle-platillos/detalle-platillos.component';
import { EditarPlatillosComponent } from './platillos/editar-platillos/editar-platillos.component';


const routes: Routes = [
  {path: 'productos', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: 'platillos', component: PlatillosComponent},
  {path: 'platillos/guardar', component: RegistrarPlatillosComponent},
  {path: 'platillos/detalle/:cod_platillo', component: DetallePlatillosComponent},
  {path: 'platillos/editar/:cod_platillo', component: EditarPlatillosComponent},
  {path: 'usuarios', component: UsuarioComponent},
  {path: 'usuarios/guardar', component: RegistrarComponent},
  {path: 'usuarios/detalle/:id', component: DetalleComponent},
  {path: 'usuarios/editar/:id', component: EditarComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
