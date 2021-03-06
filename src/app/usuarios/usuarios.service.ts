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
    { id: 1, nome: 'José Preguiçoso', email: 'jose@email.com', senha: '123456', cpf: '00000000011', matricula: '2017110011', cartaoRFID:'121', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } },
    { id: 2, nome: 'João Estudioso', email: 'joao@email.com', senha: '123456', cpf: '00000000010', matricula: '2017110011', cartaoRFID:'121', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } },
    { id: 3, nome: 'Maria Estudiosa', email: 'maria@email.com', senha: '123456', cpf: '00000000001', matricula: '2017110010', cartaoRFID:'120', classe: { id: 1, nome: 'Estudante', desconto: 75, descricao: 'Estudante' } },
    { id: 4, nome: 'Magali da Silva', email: 'magali@email.com', senha: '123456', cpf: '00000000002', matricula: '2017110002', cartaoRFID:'122', classe: { id: 2, nome: 'Estudante 50%', desconto: 50, descricao: 'Estudante contemplado com desconto de 50%' }},
    { id: 5, nome: 'Cebolinha da Silva', email: 'cebolinha@email.com', senha: '123456', cpf: '00000000003', matricula: '2017110003', cartaoRFID:'124', classe: { id: 3, nome: 'Estudante 100%', desconto: 100, descricao: 'Estudante contemplado com desconto de 100%' }},
    { id: 6, nome: 'Edeilson Nota 10', email: 'usuario04@email.com', senha: '123456', cpf: '00000000004', matricula: '2017110004', cartaoRFID:'125', classe: { id: 4, nome: 'Técnico', desconto: 20 , descricao: 'Técnico' }}
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
