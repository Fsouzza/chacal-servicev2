import { Item } from '../types/item';

export const items: Item[] = [
  { 
    date: new Date(2022, 1, 15),
    lancamentos: 'Saída', 
    categoria: 'Compra',
    departamento: 'Operacional',
    tipo: 'Recibo',
    id: 'CHCL 0023456',
    local: 'Epi Comercio LTDA',
    item: 'Bota bico aco tam 42',
    valor: 280.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 1, 22),
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
    date: new Date(2022, 2, 17),
    lancamentos: 'Saída', 
    categoria: 'Compra',
    departamento: 'RH',
    tipo: 'NFCe',
    id: '0002345 003',
    local: 'Materiais e EPI',
    item: 'Material de Expediente',
    valor: 67.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 2, 13),
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
    date: new Date(2022, 3, 20),
    lancamentos: 'Saída', 
    categoria: 'Refeição',
    departamento: 'Operacional',
    tipo: 'Recibo',
    id: '002445621',
    local: 'Raça Transportes',
    item: 'Custo de Refeição',
    valor: 238.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 4, 2),
    lancamentos: 'Saída', 
    categoria: 'Retirada',
    departamento: 'Financeiro',
    tipo: 'Recibo',
    id: '00234446',
    local: 'Escritório',
    item: 'Retirada de Caixa',
    valor: 194.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 3, 12),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Administrativo',
    tipo: 'Recibo',
    id: '0023436',
    local: 'Escritório',
    item: 'Fundo de Caixa Injetado',
    valor: 186.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 4, 28),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Administrativo',
    tipo: 'NFCe',
    id: '234345 001',
    local: 'Speed Multimodal',
    item: 'Fundo de Caixa Injetado',
    valor: 104.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 5, 19),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Administrativo',
    tipo: 'NFCe',
    id: '8761234 003',
    local: 'Speed Multimodal',
    item: 'Fundo de Caixa Injetado',
    valor: 246.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 5, 28),
    lancamentos: 'Saída', 
    categoria: 'Compra',
    departamento: 'Escritório',
    tipo: 'NFCe',
    id: '9888821 006',
    local: 'Joaninha Distribuidora',
    item: 'Garrafão de Água 20L',
    valor: 9.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 6, 6),
    lancamentos: 'Saída', 
    categoria: 'Serviços',
    departamento: 'Administrativo',
    tipo: 'NFCe',
    id: '123456 008',
    local: 'Central & Refrigeração',
    item: 'Manutenção de equip. Split',
    valor: 254.00,
    obs: '-'
  },
  { 
    date: new Date(2022, 6, 12),
    lancamentos: 'Entrada', 
    categoria: 'Receita',
    departamento: 'Administrativo',
    tipo: 'Recibo',
    id: '00236987',
    local: 'Escritório',
    item: 'Fundo de Caixa Injetado',
    valor: 192.00,
    obs: '-'
  }
];