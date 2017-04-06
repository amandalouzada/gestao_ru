import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { UsuarioComponent } from './usuario/usuario.component';


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

    ],
    exports: [

    ],
    providers: [
    ]
})
export class FinanceiroModule { }