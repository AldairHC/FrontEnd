import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistrarComponent } from './usuario/registrar/registrar.component';
import { EditarComponent } from './usuario/editar/editar.component';
import { DetalleComponent } from './usuario/detalle/detalle.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { RegistrarPlatillosComponent } from './platillos/registrar-platillos/registrar-platillos.component';
import { EditarPlatillosComponent } from './platillos/editar-platillos/editar-platillos.component';
import { DetallePlatillosComponent } from './platillos/detalle-platillos/detalle-platillos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    UsuarioComponent,
    RegistrarComponent,
    EditarComponent,
    DetalleComponent,
    PlatillosComponent,
    RegistrarPlatillosComponent,
    EditarPlatillosComponent,
    DetallePlatillosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
