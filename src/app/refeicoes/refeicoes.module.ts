import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { RefeicaoFormComponent } from './refeicao-form/refeicao-form.component';
import { RefeicoesService } from "../refeicoes/refeicoes.service";
import { ConsumoService } from '../shared/consumo.service';
import { ClassesService } from '../classes/classes.service';
import { ConsumoComponent } from './consumo/consumo.component';
import { ConsumoDiarioComponent } from './consumo-diario/consumo-diario.component';
import { ConsumoMensalComponent } from './consumo-mensal/consumo-mensal.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,
    MaterializeModule,
  ],
  declarations: [
   RefeicaoFormComponent,
   ConsumoComponent,
   ConsumoDiarioComponent,
   ConsumoMensalComponent
 ],
  exports: [

  ],
  providers: [
    RefeicoesService,
    ConsumoService,
    ClassesService
  ]
})
export class RefeicoesModule { }
