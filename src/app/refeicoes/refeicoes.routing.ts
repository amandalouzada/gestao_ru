import { Routes, RouterModule } from '@angular/router';

import { RefeicoesComponent } from './refeicoes.component';
import { RefeicaoFormComponent } from "./refeicao-form/refeicao-form.component";3
import { ConsumoComponent } from "./consumo/consumo.component";
import { ConsumoDiarioComponent } from "./consumo-diario/consumo-diario.component";
import { ConsumoMensalComponent } from "./consumo-mensal/consumo-mensal.component";



const refeicoesRoutes: Routes = [
  { path: 'refeicoes', component: RefeicoesComponent, pathMatch: 'full' },
  { path: 'refeicoes/novo', component: RefeicaoFormComponent },
  { path: 'refeicoes/:id', component: RefeicaoFormComponent },
  { path: 'consumo', component: ConsumoComponent },
  { path: 'consumoMensal', component: ConsumoMensalComponent },
  { path: 'consumoDiario', component: ConsumoDiarioComponent },
];

export const refeicoesRouting = RouterModule.forChild(refeicoesRoutes);
