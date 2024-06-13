import { Injectable } from '@angular/core';
import {AngularFireStoreCollection} from '@angular/fire/compat' //TERMINALO GORDO IDIOTA
import { Usuario } from 'src/app/models/usuario';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
private usuariosCollection: AngularFireStoreCollection<Usuario>
  constructor(private database: AngularFireStore) { 
    this.usuariosCollection = this.database.collection<Usuario>("usuarios");
  }
}
