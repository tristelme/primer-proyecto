import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from '../producto/pages/producto/producto.component';
import { AlimentoComponent } from '../producto/pages/alimento/alimento.component';
import { IndumentariaComponent } from '../producto/pages/indumentaria/indumentaria.component';
import { JugueteComponent } from '../producto/pages/juguete/juguete.component';
const routes: Routes = [
{
  path:"producto",component:ProductoComponent
},
{
  path:"alimento",component:AlimentoComponent
},
{
  path:"juguete",component:JugueteComponent
},
{
  path:"indumentaria",component:IndumentariaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
