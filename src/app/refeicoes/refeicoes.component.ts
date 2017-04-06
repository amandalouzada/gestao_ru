import { Component, OnInit, EventEmitter } from '@angular/core';
import { RefeicoesService } from './refeicoes.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Refeicao } from '../shared/refeicao';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.component.html',
  styleUrls: ['./refeicoes.component.scss']
})
export class RefeicoesComponent implements OnInit {

  formRefeicao: FormGroup;
  refeicao: Refeicao = new Refeicao();
  private refeicoes: any[] = [];

  constructor(private refeicoesService: RefeicoesService,
    formBuilder: FormBuilder,
    private usersService: RefeicoesService) {

    this.formRefeicao = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      desconto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  ngOnInit() {
      this.refeicoes = this.refeicoesService.getRefeicoes();
  }

  deletarRefeicao(refeicao){
    if (confirm("Realmente deseja deletar " + refeicao.nome + "?")) {
      var index = this.refeicoes.indexOf(refeicao);
      this.refeicoes.splice(index, 1);
    }
  }

}
