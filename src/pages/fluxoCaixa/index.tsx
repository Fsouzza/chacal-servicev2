import { AddFluxoCaixa } from './addFluxo/addFluxo';
import { Cards } from './cards/cards';
import { TabelaCaixa } from './tabelaRegistro';
import { Titulo } from './titulo/titulo';
import { useState, useEffect } from 'react';
import { items } from '../../data/itens';
import { Buscador } from './buscador/buscador';
import { MyChart } from 'components/charts';
import styles from './fluxoCaixa.module.scss';
import styles2 from '../fluxoCaixa/buscador/buscador.module.scss';

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
    const ano = new Date().getFullYear();
    const mes = new Date().getMonth();
    const dia = new Date().getDate();
    const diaAtual = new Date(ano, mes, dia);
    const diaFinal = new Date(ano, mes, dia - date);
    const dataFiltrada = items.filter((item) => item.date).filter(item => item.date >= diaFinal && item.date <= diaAtual);
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
    setEntrada(somaEntrada);
    setSaida(somaSaida);
    setTotal(contadorTotal);
    setPorcentagem(contadorPorcentagem);
    setLista(listaBusca);
  }, [items, busca]);

  return(
    <>
      <Titulo />
      <Cards entrada={entrada} saida={saida} total={total} porcentagem={porcentagem} />
      <div className={styles.inputsData}>
        <div>
          <input type='date'></input>
          <input type='date'></input>
        </div>
      </div>
      <MyChart />
      <AddFluxoCaixa />
      <div className={styles2.sBusca}>
        <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
      </div>
      <TabelaCaixa items={lista} />
    </>
  );
};