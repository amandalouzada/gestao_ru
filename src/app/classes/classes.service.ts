import { Injectable } from '@angular/core';
import { Classe } from '../shared/classe';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ClassesService {

  constructor() { }

  private classes: Classe[] = [
    { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' },
    { id: 2, nome: 'Estudante 50%', desconto: 50, descricao: 'Estudante contemplado com desconto de 50%' },
    { id: 3, nome: 'Estudante 100%', desconto: 100, descricao: 'Estudante contemplado com desconto de 100%' },
    { id: 4, nome: 'Técnico', desconto: 20 , descricao: 'Técnico' }
  ];

  getClasses() {
    return this.classes;
  }

  getClasse(id: number) {
    for (let i = 0; i < this.classes.length; i++) {
      let classe = this.classes[i];
      if (classe.id == id) {
        return classe;
      }
    }
    return null;
  }

  addClasse(classe) {
    classe.id = this.classes.length;
    this.classes.push(classe);
  }

  atualizaClasse(classe) {
    for (let i = 0; i < this.classes.length; i++) {
      let c = this.classes[i];
      if (c.id == classe.id) {
        this.classes[i] = classe;
      }
    }
    return null;
  }

}
