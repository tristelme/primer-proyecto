import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { RegistroModule } from './pages/registro/registro.module';
import { InicioComponent } from 'src/app/inicio/inicio.component';


@NgModule({
  declarations: [
    RegistroModule,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AutenticacionRoutingModule
  ],
  exports:[
    RegistroModule,
    InicioComponent
  ]
})
export class AutenticacionModule { }
