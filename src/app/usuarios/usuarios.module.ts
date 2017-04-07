import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { UsuariosService } from './usuarios.service';
import { ClassesService } from '../classes/classes.service';

import { UsuariosComponent } from './usuarios.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
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
    UsuariosComponent,
    UsuarioFormComponent,
    ConsumoComponent,
  ],
  exports: [
    UsuariosComponent,
  ],
  providers: [
    UsuariosService,
    ClassesService,
  ]
})
export class UsuariosModule { }
