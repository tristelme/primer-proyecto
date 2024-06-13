import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from '../../services/auth.service'; //servicio de Autenticacion
import { Router } from '@angular/router'; //servicio de rutas
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  hide = true  //este "hide" es para el input de contraseña

  // IMPORTACION DEL MODELO / INTERFAZ
  usuarios: Usuario = {
    uid: "",
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
    password: "",
  }

  //crear una coleccion para usuarios
  coleccionUsuarios: Usuario[] = []

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) { }

  //funcion para el usuario
 async registrar() {
    //const credenciales = {
    //uid: this.usuarios.uid="",
    //nombre: this.usuarios.nombre="",
    //apellido: this.usuarios.apellido="",
    //email: this.usuarios.email="",
    //rol: this.usuarios.rol="",
    //password: this.usuarios.password=""
    //}

    //enviamos los nuevos registros por medio del metodo push a la coleccion 
    // this.coleccionUsuarios.push(credenciales);

    // this.limpiarinputs();
    //por consola
    //console.log(credenciales)
    //console.log(this.coleccionUsuarios)
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }
    //const "res" = resguarda una respuesta
    const res = await this.servicioAuth.Registrar(credenciales.email, credenciales.password)
    //el metodo then nos devuelve la respuesta esperada por la promesa 
    .then(res => {
      alert("ha agregado un usuario con exito")
      //accedemos al servicio de rutas -> metodo navigate
      //metodo NAVIGATE = permite dirigirnos a diferentes vistas
      this.servicioRutas.navigate(["/inicio"]);
    })
    //el metodo catch toma una falla y la vuelve un ERROR
    .catch(error => {
      alert("hubo un problema al registrar un nuevo usuario")
    })
  }
  limpiarinputs() {
    const inputs = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
  }
}
