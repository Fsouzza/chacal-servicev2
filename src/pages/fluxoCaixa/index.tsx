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
  const [lista, setLista] = useState(items);

  useEffect(()=> {
    let contadorEntrada = 0;
    let contadorSaida = 0;

    for(const i in lista){
      if(lista[i].lancamentos === 'Entrada'){
        contadorEntrada += lista[i].valor;
      } else{
        contadorSaida += lista[i].valor;
      }
    }
    setEntrada(contadorEntrada);
    setSaida(contadorSaida);
    setLista(lista);
  }, [lista, busca]);


  return(
    <>
      <Titulo />
      <Cards entrada={entrada} saida={saida} busca={busca} valores={lista}  />
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