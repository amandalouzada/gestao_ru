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
    { id: 1, horario: new Date("04/06/2017 12:49:50"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 2, horario: new Date("04/06/2017 12:49:51"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 3, horario: new Date("04/06/2017 12:49:52"), tipo_refeicao: 2, usuario_id: 3, classe_id: 1 },
    { id: 4, horario: new Date("04/06/2017 12:49:53"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 5, horario: new Date("04/06/2017 12:49:54"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 6, horario: new Date("04/07/2017 12:49:50"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 7, horario: new Date("04/07/2017 12:49:51"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 8, horario: new Date("04/07/2017 12:49:52"), tipo_refeicao: 3, usuario_id: 3, classe_id: 1 },
    { id: 9, horario: new Date("04/07/2017 12:49:53"), tipo_refeicao: 3, usuario_id: 1, classe_id: 1 },
    { id: 10, horario: new Date("04/07/2017 12:49:54"), tipo_refeicao: 3, usuario_id: 2, classe_id: 1 },
    { id: 11, horario: new Date("04/05/2017 12:49:50"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 12, horario: new Date("04/05/2017 12:49:51"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 13, horario: new Date("04/05/2017 12:49:52"), tipo_refeicao: 2, usuario_id: 3, classe_id: 1 },
    { id: 14, horario: new Date("04/05/2017 12:49:53"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 15, horario: new Date("04/05/2017 12:49:54"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 16, horario: new Date("04/05/2017 12:49:50"), tipo_refeicao: 2, usuario_id: 1, classe_id: 1 },
    { id: 17, horario: new Date("04/04/2017 12:49:51"), tipo_refeicao: 2, usuario_id: 2, classe_id: 1 },
    { id: 18, horario: new Date("04/04/2017 12:49:52"), tipo_refeicao: 3, usuario_id: 3, classe_id: 1 },
    { id: 19, horario: new Date("04/04/2017 12:49:53"), tipo_refeicao: 3, usuario_id: 1, classe_id: 1 },
    { id: 20, horario: new Date("04/05/2017 12:49:54"), tipo_refeicao: 3, usuario_id: 2, classe_id: 1 },
  ];

  getConsumos() {
    return this.consumos;
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

}
