import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { RefeicoesService } from '../refeicoes.service';
import { Refeicao } from '../../shared/refeicao';
import { MaterializeAction } from 'angular2-materialize'

@Component({
  selector: 'app-refeicao-form',
  templateUrl: './refeicao-form.component.html',
  styleUrls: ['./refeicao-form.component.scss']
})
export class RefeicaoFormComponent implements OnInit {

  formRefeicao: FormGroup;
  refeicao: Refeicao = new Refeicao();
  private refeicoes: any[] = [];
  title: string;

  constructor(private refeicoesService: RefeicoesService,
    private router: Router,
    private route: ActivatedRoute,
    formBuilder: FormBuilder,
    private refeicaoService: RefeicoesService) {

    this.formRefeicao = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      periodo: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    });
  }


  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Refeicao' : 'Nova Refeicao';

      if (!id)
        return;

      this.refeicao = this.refeicoesService.getRefeicao(id)

    });

  }

  salvar() {
    var result,
      refeicaoValue = this.formRefeicao.value;

    if (refeicaoValue.id) {
      result = this.refeicoesService.atualizaRefeicao(refeicaoValue);
    } else {
      result = this.refeicoesService.addRefeicao(refeicaoValue);
    }

    this.router.navigate(['refeicoes'])
  }

}
