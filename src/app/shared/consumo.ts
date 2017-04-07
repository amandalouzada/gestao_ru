class Item{
  id: number;
  nome: string;
}

export class Consumo {
  id: number;
  horario: Date;
  tipo_refeicao: Item;
  usuario: Item;
  classe: Item;
  valor: number
}
