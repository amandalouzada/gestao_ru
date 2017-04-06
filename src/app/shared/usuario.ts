import { Classe } from './classe';

export class Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  cpf: string;
  matricula: string;
  cartaoRFID: string; 
  classe: Classe;
}
