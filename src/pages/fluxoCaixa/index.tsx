import { AddFluxoCaixa } from './addFluxo';
import { Cards } from './cards';
import { TabelaCaixa } from './tabelaRegistro';
import { Titulo } from './titulo/titulo';
import { useState, useEffect } from 'react';
import { items } from 'data/itens';
import { Buscador } from './buscador';
import { MyChart } from 'components/charts';

export const FluxoCaixa = () => {
  const [busca, setBusca] = useState('');
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [lista, setLista] = useState(items);
  

  function verificaBusca(title: string){
    const regex = new RegExp(`^${busca}`, 'i');
    return regex.test(title);
  }

  const filterByDate = (date: number) => {
    const dataAtual = new Date();
    const dataInicial = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate());
    const dataFinal = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), dataAtual.getDate() - date);
    const dataFiltrada = items.filter((item) => item.date).filter(item => item.date >= dataFinal && item.date <= dataInicial);
    date < 0 ? setLista(items) : setLista(dataFiltrada);
  };

  useEffect(()=> {
    const somaEntrada = items.filter((item) => item.lancamentos === 'Entrada').reduce((acc, cur) => acc + cur.valor, 0);
    const somaSaida = items.filter((item) => item.lancamentos === 'Saída').reduce((acc, cur) => acc + cur.valor, 0);
    const contadorTotal = somaEntrada - somaSaida;
    const contadorPorcentagem = contadorTotal / 100;
    const listaBusca = items.filter(item => 
      verificaBusca(item.item)
      || verificaBusca(item.tipo) 
      || verificaBusca(item.departamento) 
      || verificaBusca(item.local)
      || verificaBusca(item.lancamentos)
    );
    setLista(listaBusca);
    setEntrada(somaEntrada);
    setSaida(somaSaida);
    setTotal(contadorTotal);
    setPorcentagem(contadorPorcentagem);
  }, [items, busca]);

  return(
    <>
      <Titulo />
      <Cards entrada={entrada} saida={saida} total={total} porcentagem={porcentagem} />
      <MyChart />
      <AddFluxoCaixa />
      <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
      <TabelaCaixa items={lista} />
    </>
  );
};