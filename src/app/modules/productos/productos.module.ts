import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
import { AlimentoComponent } from '../producto/pages/alimento/alimento.component';
import { JugueteComponent } from '../producto/pages/juguete/juguete.component';
import { IndumentariaComponent } from '../producto/pages/indumentaria/indumentaria.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AlimentoComponent,
    JugueteComponent,
    IndumentariaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
exports: [
  ProductoComponent,
  AlimentoComponent,
  JugueteComponent,
  IndumentariaComponent
],
})
export class ProductosModule { }
