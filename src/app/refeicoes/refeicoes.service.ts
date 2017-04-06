import { Injectable } from '@angular/core';
import { Refeicao } from '../shared/refeicao';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class RefeicoesService {

  constructor() { }

  private refeicoes: Refeicao[] = [
    { id: 1, nome: 'Café da Manhã', periodo: 1, preco: 5.00 },
    { id: 2, nome: 'Almoço', periodo: 2, preco: 10.00 },
    { id: 3, nome: 'Jantar', periodo: 3, preco: 10.00 },
  ];

  getRefeicoes() {
    return this.refeicoes;
  }

  getRefeicao(id: number) {
    for (let i = 0; i < this.refeicoes.length; i++) {
      let refeicao = this.refeicoes[i];
      if (refeicao.id == id) {
        return refeicao;
      }
    }
    return null;
  }

  addRefeicao(refeicao) {
    refeicao.id = this.refeicoes.length;
    this.refeicoes.push(refeicao);
  }

  atualizaRefeicao(refeicao) {
    for (let i = 0; i < this.refeicoes.length; i++) {
      let c = this.refeicoes[i];
      if (c.id == refeicao.id) {
        this.refeicoes[i] = refeicao;
      }
    }
    return null;
  }

}
