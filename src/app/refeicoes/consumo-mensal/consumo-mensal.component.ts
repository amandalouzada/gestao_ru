import { Component, OnInit, EventEmitter } from '@angular/core';
import { ConsumoService } from '../../shared/consumo.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consumo } from '../../shared/consumo';
import { Classe } from '../../shared/classe';
import { Refeicao } from '../../shared/refeicao';
import { ClassesService } from '../../classes/classes.service';
import { RefeicoesService } from '../../refeicoes/refeicoes.service';

@Component({
  selector: 'app-consumo-mensal',
  templateUrl: './consumo-mensal.component.html',
  styleUrls: ['./consumo-mensal.component.css']
})
export class ConsumoMensalComponent implements OnInit {

  formRefeicao: FormGroup;
  consumo: Consumo = new Consumo();
  private consumos: any[] = [];
  private classes: any[] = [];
  private refeicoes: any[] = [];
  private classe: number;
  private refeicao: number;
  private usuario: string;
  dia: Date = new Date();


  constructor(private consumoService: ConsumoService,
    private classesService: ClassesService,
    private refeicoesService: RefeicoesService,
    formBuilder: FormBuilder,
    ) {

  }

  ngOnInit() {
      this.consumos = this.consumoService.getConsumoByMes(this.dia);
      this.classes = this.classesService.getClasses();
      this.refeicoes = this.refeicoesService.getRefeicoes();
  }

  buscarConsumo() {
    console.log("Buscando")
  }

}
