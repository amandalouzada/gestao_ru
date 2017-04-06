import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { UsuariosService } from '../usuarios.service';
import { Usuario } from '../../shared/usuario';
import { MaterializeAction } from 'angular2-materialize';
import { Classe } from '../../shared/classe';
import { ClassesService } from '../../classes/classes.service';


@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss'],
})

export class UsuarioFormComponent implements OnInit {

  title: string;
  modalActions = new EventEmitter<string | MaterializeAction>();
  formUsuario: FormGroup;
  usuario: Usuario = new Usuario();
  classes: Array<Classe> = [];
  classe: number;

  constructor(private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private classesService: ClassesService) {

    this.formUsuario = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.minLength(3)]],
      matricula: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      cartaoRFID: ['', [Validators.minLength(4)]],
      classe:[''],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Usuário' : 'Novo usuário';

      if (!id)
        return;

      this.usuario = this.usuarioService.getUsuario(id)

    });

    this.classes = this.classesService.getClasses();

  }

  salvar() {
    var result,
      usuarioValue = this.formUsuario.value;
      usuarioValue.classe = this.classesService.getClasse(this.classe);


    if (this.usuario.id) {
      result = this.usuarioService.atualizaUsuario(usuarioValue);
    } else {
      result = this.usuarioService.addUsuario(usuarioValue);
    }

    this.router.navigate(['usuarios'])
  }




}
