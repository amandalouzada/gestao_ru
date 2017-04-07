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
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {

  formRefeicao: FormGroup;
  consumo: Consumo = new Consumo();
  private consumos: any[] = [];
  private classes: any[] = [];
  private refeicoes: any[] = [];
  private classe: number;
  private refeicao: number;
  private usuario: string;



  constructor(private consumoService: ConsumoService,
    private classesService: ClassesService,
    private refeicoesService: RefeicoesService,
    formBuilder: FormBuilder,
    ) {

    this.formRefeicao = formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      desconto: ['', [Validators.required]],
      descricao: ['', [Validators.required]],
    });
  }

  ngOnInit() {
      this.consumos = this.consumoService.getConsumos();
      this.classes = this.classesService.getClasses();
      this.refeicoes = this.refeicoesService.getRefeicoes();
  }

  buscarConsumo() {
    if (this.usuario)
      if(this.classe)
        if(this.refeicao)
          this.consumos = this.consumoService.getConsumosByUserClasseRefeicao(this.usuario, this.classe , this.refeicao);
        else
          this.consumos = this.consumoService.getConsumosByUserClasse(this.usuario, this.classe)
      else
        if(this.refeicao)
          this.consumos = this.consumoService.getConsumosByUserRefeicao(this.usuario, this.refeicao)
        else
          this.consumos = this.consumoService.getConsumosByUserNome(this.usuario)
    else
      if(this.classe)
        if(this.refeicao)
          this.consumos = this.consumoService.getConsumosByClasseRefeicao(this.classe , this.refeicao);
        else
          this.consumos = this.consumoService.getConsumosByClasse(this.classe)
      else
          if(this.refeicao)
            this.consumos = this.consumoService.getConsumosByRefeicao(this.refeicao)
  }

}
