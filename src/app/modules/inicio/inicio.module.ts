import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CardComponet } from './componets/card/card.component';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponet
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,

  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
