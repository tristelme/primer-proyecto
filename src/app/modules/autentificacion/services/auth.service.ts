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

    // Función para tomar UID
    async obtenerUid(){
      // Nos va a generar una promesa, y la constante la va a capturar
      const user = await this.auth.currentUser;
  
      /*
        Si el usuario no respeta la estructura de la interfaz /
        Si tuvo problemas para el registro -> ej.: mal internet
      */
      if(user == null){
        return null;
      } else {
        return user.uid;
      }
    }
}
