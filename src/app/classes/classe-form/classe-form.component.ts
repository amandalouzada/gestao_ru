import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ClassesService } from '../classes.service';
import { Classe } from '../../shared/classe';
import { MaterializeAction } from 'angular2-materialize'

@Component({
  selector: 'app-classe-form',
  templateUrl: './classe-form.component.html',
  styleUrls: ['./classe-form.component.scss']
})
export class ClasseFormComponent implements OnInit {

  formClasse: FormGroup;
  classe: Classe = new Classe();
  private classes: any[] = [];
  title: string;

  constructor(private classesService: ClassesService,
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder,
    private classeService: ClassesService) {

    this.formClasse = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      desconto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }


  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Classe' : 'Nova Classe';

      if (!id)
        return;

      this.classe = this.classesService.getClasse(id)

    });

  }

  salvar() {
    var result,
      classeValue = this.formClasse.value;

    if (classeValue.id) {
      result = this.classesService.atualizaClasse(classeValue);
    } else {
      result = this.classesService.addClasse(classeValue);
    }

    this.router.navigate(['classes'])
  }

}
