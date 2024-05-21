import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
{path:"",component:InicioComponent},
{path:"contacto",component:ContactoComponent},
{path:"acercade",component:AcercadeComponent},
// {path:"productos",component:ProductosComponent},
{
  path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
},
{
  path:"",loadChildren:()=>import('./modules/productos/productos.module').then(m=>m.ProductosModule)
},
{
  path:"",loadChildren:()=>import('./modules/autenticacion/autenticacion.module').then(m=>m.AutenticacionModule)
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
