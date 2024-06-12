import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector:'app-registro',
  templateUrl:'./registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // input de la contraseña para ver los caracteres o no
  hide = true;
  // importar la interfaz de uruario -> inicialiazar
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }
  coleccionUsuarios: Usuario[] = [];

  registrar() {
    const credenciales = {
      uid: this.usuarios.uid,
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    this.coleccionUsuarios.push(credenciales)
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }
}
