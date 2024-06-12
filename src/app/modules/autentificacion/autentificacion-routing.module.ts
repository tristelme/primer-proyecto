import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './pages/registro/registro.component';
import { InicioComponent } from 'src/app/inicio/inicio.component';
const routes: Routes = [
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"inicio-sesion",component:RegistroComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
