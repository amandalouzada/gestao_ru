import { Injectable } from '@angular/core';
import { Consumo } from './consumo';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ConsumoService {

  constructor() { }


  private consumos: Consumo[] = [
    { id: 1, horario: new Date("04/06/2017 08:49:50"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 2, horario: new Date("04/06/2017 08:49:51"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 3, horario: new Date("04/06/2017 08:49:54"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 4, horario: new Date("04/06/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 5, horario: new Date("04/06/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 6, horario: new Date("04/06/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 7, horario: new Date("04/06/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:6, nome:"Edeilson Nota 10" }, classe: {id:4, nome:"Técnico" }},
    { id: 8, horario: new Date("04/06/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 9, horario: new Date("04/06/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 10, horario: new Date("04/07/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 11, horario: new Date("04/07/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 12, horario: new Date("04/05/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 13, horario: new Date("04/05/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 14, horario: new Date("04/05/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 15, horario: new Date("04/05/2017 17:49:53"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 16, horario: new Date("04/05/2017 18:09:54"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 17, horario: new Date("04/05/2017 18:49:50"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 18, horario: new Date("04/04/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 19, horario: new Date("04/04/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 20, horario: new Date("04/04/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 21, horario: new Date("04/05/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:1, nome:"Estudante" }},
    { id: 22, horario: new Date("03/06/2017 08:49:51"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 23, horario: new Date("03/06/2017 08:49:54"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 24, horario: new Date("03/06/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 25, horario: new Date("03/06/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 26, horario: new Date("03/06/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 27, horario: new Date("03/06/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:6, nome:"Edeilson Nota 10" }, classe: {id:4, nome:"Técnico" }},
    { id: 28, horario: new Date("03/06/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 29, horario: new Date("03/06/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 30, horario: new Date("03/07/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 31, horario: new Date("03/07/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 32, horario: new Date("03/05/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 33, horario: new Date("03/05/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 34, horario: new Date("03/05/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 35, horario: new Date("03/05/2017 17:49:53"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 36, horario: new Date("03/05/2017 18:09:54"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 37, horario: new Date("03/05/2017 18:49:50"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 38, horario: new Date("03/04/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 39, horario: new Date("03/04/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 40, horario: new Date("03/04/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 41, horario: new Date("02/05/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:1, nome:"Estudante" }},
    { id: 42, horario: new Date("02/06/2017 07:49:51"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 43, horario: new Date("02/06/2017 07:49:54"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 44, horario: new Date("02/06/2017 07:49:52"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 45, horario: new Date("02/06/2017 08:00:53"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 46, horario: new Date("02/06/2017 08:09:54"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 47, horario: new Date("02/06/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:6, nome:"Edeilson Nota 10" }, classe: {id:4, nome:"Técnico" }},
    { id: 48, horario: new Date("02/06/2017 12:49:51"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 49, horario: new Date("02/06/2017 12:49:52"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 50, horario: new Date("02/07/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 51, horario: new Date("02/07/2017 12:49:54"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 52, horario: new Date("02/05/2017 12:49:50"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 53, horario: new Date("02/05/2017 12:49:51"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 54, horario: new Date("02/05/2017 12:49:52"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 55, horario: new Date("02/05/2017 17:49:53"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
    { id: 56, horario: new Date("02/05/2017 18:09:54"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:4, nome:"Magali da Silva" }, classe: {id:2, nome:"Estudante 50%" }},
    { id: 57, horario: new Date("02/05/2017 18:49:50"), tipo_refeicao: { id: 3, nome: "Jantar" }, usuario: {id:5, nome:"Cebolinha da Silva" }, classe: {id:3, nome:"Estudante 100%" }},
    { id: 58, horario: new Date("02/04/2017 08:09:51"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:1, nome:"José Preguiçoso" }, classe: {id:1, nome:"Estudante" }},
    { id: 59, horario: new Date("02/04/2017 08:10:52"), tipo_refeicao: { id: 1, nome: "Café da Manhã" }, usuario: {id:2, nome:"João Estudioso" }, classe: {id:1, nome:"Estudante" }},
    { id: 60, horario: new Date("02/04/2017 12:49:53"), tipo_refeicao: { id: 2, nome: "Almoço" }, usuario: {id:3, nome:"Maria Estudiosa" }, classe: {id:1, nome:"Estudante" }},
  ];

  getConsumos() {
    return this.consumos;
  }

  getConsumosByUser(id: number){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.usuario.id == id) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByUserNome(nome: string){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.usuario.nome.startsWith(nome)) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByUserClasseRefeicao(nome: string,id_classe: number, id_refeicao: number ){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.usuario.nome.startsWith(nome) && consumo.classe.id == id_classe && consumo.tipo_refeicao.id == id_refeicao) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByUserClasse(nome: string,id_classe: number ){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.usuario.nome.startsWith(nome) && consumo.classe.id == id_classe) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByUserRefeicao(nome: string, id_refeicao: number ){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.usuario.nome.startsWith(nome) && consumo.tipo_refeicao.id == id_refeicao) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }



  getConsumosByRefeicao(id: number){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.tipo_refeicao.id == id) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByClasse(id: number){
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.classe.id == id) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumosByClasseRefeicao(id_classe: number, id_refeicao: number) {
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.classe.id == id_classe && consumo.tipo_refeicao.id == id_refeicao) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }



  getConsumo(id: number) {
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.id == id) {
        return consumo;
      }
    }
    return null;
  }

  addConsumo(consumo) {
    consumo.id = this.consumos.length;
    this.consumos.push(consumo);
  }

  atualizaConsumo(consumo) {
    for (let i = 0; i < this.consumos.length; i++) {
      let c = this.consumos[i];
      if (c.id == consumo.id) {
        this.consumos[i] = consumo;
      }
    }
    return null;
  }

  getConsumoByDia(dia: Date) {
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.horario.getDate() == dia.getDate() && consumo.horario.getMonth() == dia.getMonth()) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

  getConsumoByMes(mes: Date) {
    let consumosUsuario = [];
    for (let i = 0; i < this.consumos.length; i++) {
      let consumo = this.consumos[i];
      if (consumo.horario.getMonth() == mes.getMonth()) {
        consumosUsuario.push(consumo);
      }
    }
    return consumosUsuario;
  }

}
