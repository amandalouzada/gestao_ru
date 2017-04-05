import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }  from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { ClasseFormComponent } from './classe-form/classe-form.component';
import { ClassesService } from "../classes/classes.service";


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
    ClasseFormComponent,
  ],
  exports: [
  ],
  providers: [
    ClassesService,
  ]
})
export class ClassesModule { }
