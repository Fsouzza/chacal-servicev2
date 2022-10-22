import { AddFluxoCaixa } from './addFluxo/addFluxo';
import { Cards } from './cards/cards';
import { TabelaCaixa } from './tabelaRegistro';
import { Titulo } from './titulo/titulo';
import { useState, useEffect } from 'react';
import { items } from '../../data/itens';
import { Buscador } from './buscador/buscador';
import { MyChart } from 'components/charts';
import styles from './fluxoCaixa.module.scss';


export const FluxoCaixa = () => {
  const [busca, setBusca] = useState('');
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);
  const [lista, setLista] = useState(items);

  useEffect(()=> {
    const somaEntrada = items.filter((item) => item.lancamentos === 'Entrada').reduce((acc, cur) => acc + cur.valor, 0);
    const somaSaida = items.filter((item) => item.lancamentos === 'Saída').reduce((acc, cur) => acc + cur.valor, 0);
    const contadorTotal = somaEntrada - somaSaida;
    const contadorPorcentagem = contadorTotal / 100;
    
    setEntrada(somaEntrada);
    setSaida(somaSaida);
    setTotal(contadorTotal);
    setPorcentagem(contadorPorcentagem);
    setLista(lista);
  }, [lista]);

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
      <Buscador busca={busca} setBusca={setBusca} />
      <TabelaCaixa busca={busca} items={lista} />
    </>
  );
};