import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  //funcion para tomar UID 

  //funcion para registro
  Registrar(email: string, password: string) {
    //retorna nueva info de email y contraseña
    return this.auth.createUserWithEmailAndPassword(email, password);

  }
  //funcion para inicio de sesion 
  IniciarSesion(email: string, password: string) {
    //validar el email y contraseña
    return this.auth.signInWithEmailAndPassword(email, password);

  }

  //funcion para cerrar sesion
  CerrarSesion() {
    return this.auth.signOut()
  }
}
