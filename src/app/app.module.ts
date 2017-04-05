import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { ClassesModule } from "app/classes/classes.module";
import { classesRouting } from "app/classes/classes.routing";
import { usuariosRouting } from './usuarios/usuarios.routing';
import { UsuariosModule } from "app/usuarios/usuarios.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClassesComponent } from './classes/classes.component';
import { RefeicoesComponent } from './refeicoes/refeicoes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routing } from "app/app.routing";
import { CartaoComponent } from './cartao/cartao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClassesComponent,
    RefeicoesComponent,
    PageNotFoundComponent,
    CartaoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    UsuariosModule,
    usuariosRouting,
    ClassesModule,
    classesRouting,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
