import { Component } from '@angular/core';
import { Comida } from 'src/app/models/comida';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponet {
  public info: Comida[];
  constructor(){
    this.info = [
      {
        id:"",
        nombre:"polenta",
        marca:"presto pronto",
        codigo:0,
        imagen:"https://acdn.mitiendanube.com/stores/001/350/887/products/instantaneos-41-1466f5c8ad056acdd616861529717551-1024-1024.png",
        alt:"imagen peroncha"
      },
      {
        id:"",
        nombre:"salsa",
        marca:"presto pronto",
        codigo:0,
        imagen:"https://arcorencasa.com/wp-content/uploads/2023/07/20230718-13318.jpg",
        alt:"imagen salsa"
      },
    {
        id:"",
        nombre:"dulce",
        marca:"presto pronto",
        codigo:0,
        imagen:"https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/m/e/membrillo-transformed.png",
        alt:"imagen dulce"
    }
    ]
   }
  }
  