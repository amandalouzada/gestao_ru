import { Component, OnInit, EventEmitter } from '@angular/core';
import { ConsumoService } from '../../shared/consumo.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Consumo } from '../../shared/consumo';


@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {

  formRefeicao: FormGroup;
  consumo: Consumo = new Consumo();
  private consumos: any[] = [];

  constructor(private consumoService: ConsumoService,
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
  }

}
