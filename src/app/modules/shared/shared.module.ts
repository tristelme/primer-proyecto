import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componets/footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports:[
    CommonModule,
    MatMenuModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
    ],
    
    exports:[
      NavbarComponent,
      MatMenuModule,
      FooterComponent,
      AppRoutingModule,
      MatIconModule,
      MatButtonModule,
      MatToolbarModule
    ],
})
export class SharedModule { }
