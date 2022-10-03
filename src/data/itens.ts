import { Item } from '../types/item';

export const items: Item[] = [
  { 
    date: new Date(2022, 9, 15),
    lancamentos: 'Saída', 
    categoria: 'Compra',
    departamento: 'Operacional',
    tipo: 'Recibo',
    id: 'CHCL 0023456',
    local: 'Epi Comercio LTDA',
    item: 'Bota bico aco tam 42',
    valor: 80.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 9, 16),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Financeiro',
    tipo: 'NFCe',
    id: 'CHCL 000000',
    local: 'Escritório',
    item: 'Fundo de Caixa Injetado',
    valor: 350.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 9, 17),
    lancamentos: 'Saída', 
    categoria: 'Compra',
    departamento: 'Administrativo',
    tipo: 'NFCe',
    id: '0002345 003',
    local: 'Tribom Supermercado',
    item: 'Material de Expediente',
    valor: 67.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 9, 17),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Administrativo',
    tipo: 'S/ Recibo',
    id: '000000',
    local: 'Escritório',
    item: 'Fundo de Caixa Injetado',
    valor: 250.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 9, 20),
    lancamentos: 'Saída', 
    categoria: 'Refeição',
    departamento: 'Operacional',
    tipo: 'Recibo',
    id: 'CHCL 0023460',
    local: 'Raça Transportes',
    item: 'Custo de Refeição',
    valor: 92.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 8, 20),
    lancamentos: 'Saída', 
    categoria: 'Refeição',
    departamento: 'Operacional',
    tipo: 'Recibo',
    id: 'CHCL 0023434',
    local: 'Speed Multimodal',
    item: 'Custo de Refeição',
    valor: 84.00,
    obs: '-'
  }
];