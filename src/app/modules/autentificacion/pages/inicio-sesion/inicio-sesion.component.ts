import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from 'src/app/modules/shared/services/firestore.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  hide = true
  /* ####################################### LOCAL 
  public usuariolocal: Usuario[]  //definimos la propiedad que guarda la coleccion 

  constructor() {  //utilizo un constructor para las credenciales correctas 

    this.usuariolocal = [{
      uid: "", //atributos de tipo any = reciben valores indefinidos 
      nombre: "Julian",
      apellido: "Moscon",
      email: "julianmoscon@gmail.com",
      rol: "visitante",
      password: "1234"
    }]
  }
//###################################################################### FIN LOCAL */

constructor(
  public servicioAuth: AuthService,
  public servicioFirestore: FirestoreService,
  public servicioRutas: Router
) { }

// ####################################### INGRESADO
  // Importamos la interfaz de usuario e inicializamos vacío
  inicio_sesion: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: ""
  }

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []


  //funcion para el inicio de sesion
  async IniciarSesion() {
  /*  const credenciales = {
      uid: this.inicio_sesion.uid,
      nombre: this.inicio_sesion.nombre,
      apellido: this.inicio_sesion.apellido,
      email: this.inicio_sesion.email,
      rol: this.inicio_sesion.rol,
      password: this.inicio_sesion.password,
    }

    for (let i = 0; i < this.usuariolocal.length; i++) {
      const orden = this.usuariolocal[i];

      if (orden.email === credenciales.email && 
          orden.password === credenciales.password) {
        alert("inicio de sesion")
      }
      else {
        alert("fallo inicio sesion")
      }
    }



    //por consola
    console.log(credenciales)
    console.log(this.coleccionUsuarios)

  }*/
    const credenciales = {
      email: this.inicio_sesion.email,
      password: this.inicio_sesion.password
    }

    const res = await this.servicioAuth.IniciarSesion(credenciales.email, credenciales.password)
      .then(res => {
        alert('¡Se ha logueado con éxito! :D');

        this.servicioRutas.navigate(['/inicio']);
      })
      .catch(err => {
        alert('Hubo un problema al iniciar sesión :( ' + err);

        this.limpiarInputs();
      })
  }

  // Función para vaciar el formulario
  limpiarInputs() {
    const inputs = {
      email: this.inicio_sesion.email = '',
      password: this.inicio_sesion.password = ''
    }
  }
}



