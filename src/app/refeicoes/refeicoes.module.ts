import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { RefeicaoFormComponent } from './refeicao-form/refeicao-form.component';
import { RefeicoesService } from "../refeicoes/refeicoes.service";
import { ConsumoService } from '../shared/consumo.service';
import { ConsumoComponent } from './consumo/consumo.component';



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
   ConsumoComponent
 ],
  exports: [

  ],
  providers: [
    RefeicoesService,
    ConsumoService
  ]
})
export class RefeicoesModule { }
