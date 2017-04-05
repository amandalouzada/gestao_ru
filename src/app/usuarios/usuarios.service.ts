import { Injectable } from '@angular/core';
import { Usuario } from '../shared/usuario';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class UsuariosService {

  constructor() { }

  private usuarios: Usuario[] = [
    { id: 1, nome: 'Usuário 01', email: 'usuario01@email.com', senha: '123456', cpf: '00000000001', matricula: '2017110001', cartaoRFID:'123', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } },
    { id: 2, nome: 'Usuário 02', email: 'usuario02@email.com', senha: '123456', cpf: '00000000002', matricula: '2017110002', cartaoRFID:'122', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } },
    { id: 3, nome: 'Usuário 03', email: 'usuario03@email.com', senha: '123456', cpf: '00000000003', matricula: '2017110003', cartaoRFID:'124', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } }
  ];

  getUsuarios() {
    return this.usuarios;
  }

  getUsuario(id: number) {
    for (let i = 0; i < this.usuarios.length; i++) {
      let aluno = this.usuarios[i];
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  addUsuario(usuario) {
    usuario.id = this.usuarios.length;
    this.usuarios.push(usuario);
  }

  atualizaUsuario(usuario) {
    for (let i = 0; i < this.usuarios.length; i++) {
      let u = this.usuarios[i];
      if (u.id == usuario.id) {
        this.usuarios[i]= usuario;
      }
    }
    return null;
  }


}
