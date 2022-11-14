

export const contract = [
  {
    id: 1,
    numero: '001-2022',
    empresa: 'Raça Transportes Ltda',
    cnpj: '11.111.111/1111-11',
    email: {
      principal: 'manaus.mdo@raca-transportes.com.br',
      secundário: '',
      terciário: '',
    },
    servico: 'MDO',
    valor: 84,
    contrato: new Date(2020, 4, 22),
    contratoRenovado: 'sim',
    faturamento: 'Semanal',
    vlrReajustado: 93.5,
    situacao: 'Ativo'
  },
  {
    id: 2,
    numero: '002-2022',
    empresa: 'Speed Multm Transportes',
    cnpj: '22.222.222/2222-22',
    servico: 'MDO',
    email: {
      principal: 'mauricio@speedmultimodal.com.br',
      secundário: '',
      terciário: '',
    },
    valor: 83,
    contrato: new Date(2020, 6, 18),
    contratoRenovado: 'nao',
    faturamento: 'Quinzenal',
    vlrReajustado: 83,
    situacao: 'Ativo'
  },
  {
    id: 3,
    numero: '003-2022',
    empresa: 'Granport Logistica',
    cnpj: '33.333.333/3333-33',
    servico: 'MDO',
    email: {
      principal: 'operacional@granport-logistics.com',
      secundário: '',
      terciário: '',
    },
    valor: 92,
    contrato: new Date(2022, 6, 1),
    contratoRenovado: 'sim',
    faturamento: 'Semanal',
    vlrReajustado: 92,
    situacao: 'Ativo'
  },
  {
    id: 4,
    numero: '004-2022',
    empresa: 'Granport Logistica',
    cnpj: '44.444.444/4444-44',
    servico: 'MDO Especial',
    email: {
      principal: 'operacional@granport-logistics.com',
      secundário: '',
      terciário: '',
    },
    valor: 100,
    contrato: new Date(2022, 8, 12),
    contratoRenovado: 'sim',
    faturamento: 'Semanal',
    vlrReajustado: 100,
    situacao: 'Ativo'
  },
  {
    id: 5,
    numero: '005-2022',
    empresa: 'Mercantil Nova Era',
    cnpj: '55.555.555/5555-55',
    servico: 'Frota',
    email: {
      principal: 'superatacado@novaera.net',
      secundário: '',
      terciário: '',
    },
    valor: 92,
    contrato: new Date(2015, 10, 30),
    contratoRenovado: 'sim',
    faturamento: 'Semanal',
    vlrReajustado: 92,
    situacao: 'Inativo'
  },
  {
    id: 6,
    numero: '006-2022',
    empresa: 'Transmamede Logística',
    cnpj: '66.666.666/6666-66',
    servico: 'MDO',
    email: {
      principal: 'financeiro@transmmed.com.br',
      secundário: '',
      terciário: '',
    },
    valor: 92,
    contrato: new Date(),
    contratoRenovado: 'sim',
    faturamento: 'Quinzenal',
    vlrReajustado: 92,
    situacao: 'Pendente'
  },
];