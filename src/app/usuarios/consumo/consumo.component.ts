import { Component, OnInit, EventEmitter } from '@angular/core';
import { ConsumoService } from '../../shared/consumo.service';
import { MaterializeAction } from 'angular2-materialize';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Consumo } from '../../shared/consumo';
import { Usuario } from '../../shared/usuario';
import { Classe } from '../../shared/classe';
import { Refeicao } from '../../shared/refeicao';
import { ClassesService } from '../../classes/classes.service';
import { RefeicoesService } from '../../refeicoes/refeicoes.service';
import { UsuariosService } from '../../usuarios/usuarios.service';


@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})
export class ConsumoComponent implements OnInit {

  consumo: Consumo = new Consumo();
  private consumos: any[] = [];
  private classes: any[] = [];
  private refeicoes: any[] = [];
  private classe: number;
  private refeicao: number;
  private usuario: Usuario;
  dia : Date = new Date();

  constructor(private consumoService: ConsumoService,
    private classesService: ClassesService,
    private refeicoesService: RefeicoesService,
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService
   ) {

    }

    ngOnInit() {
      var id = this.route.params.subscribe(params => {
        var id = params['id'];

        if (!id)
        return;

        this.usuario = this.usuariosService.getUsuario(id)
        this.consumos = this.consumoService.getConsumosByUser(id);
      });

      this.classes = this.classesService.getClasses();
      this.refeicoes = this.refeicoesService.getRefeicoes();
    }

    buscarConsumo() {

    }

  }
