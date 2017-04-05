import { Component, OnInit, EventEmitter } from '@angular/core';
import { UsuariosService } from './usuarios.service';
import { ClassesService } from '../classes/classes.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuario } from '../shared/usuario';
import { Classe } from '../shared/classe';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuario: Usuario = new Usuario();
  private usuarios: any[] = [];
  private classes: any[] = [];

  constructor( private usuariosService: UsuariosService,
    private classesService: ClassesService ) {
  }

  ngOnInit() {
      this.usuarios = this.usuariosService.getUsuarios();
      this.classes = this.classesService.getClasses();
  }

  deletarUsuario(usuario){
    if (confirm("Realmente deseja deletar " + usuario.nome + "?")) {
      var index = this.usuarios.indexOf(usuario);
      this.usuarios.splice(index, 1);
    }
  }

    bloquearUsuario(usuario){
    if (confirm("Realmente deseja bloquear " + usuario.nome + "?")) {
      var index = this.usuarios.indexOf(usuario);
      this.usuarios.splice(index, 1);
    }
  }

}
