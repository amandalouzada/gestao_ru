import { Component, OnInit, EventEmitter } from '@angular/core';
import { ClassesService } from './classes.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Classe } from '../shared/classe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  formClasse: FormGroup;
  classe: Classe = new Classe();
  private classes: any[] = [];

  constructor(private classesService: ClassesService,
    formBuilder: FormBuilder,
    private usersService: ClassesService) {

    this.formClasse = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      desconto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  ngOnInit() {
      this.classes = this.classesService.getClasses();
  }

  deletarClasse(classe){
    if (confirm("Realmente deseja deletar " + classe.nome + "?")) {
      var index = this.classes.indexOf(classe);
      this.classes.splice(index, 1);
    }
  }

}
