import { AddFluxoCaixa } from './addFluxo/addFluxo';
import { Cards } from './cards/cards';
import { TabelaCaixa } from './tabelaRegistro';
import { Titulo } from './titulo/titulo';
import { useState, useEffect } from 'react';
import { Item } from '../../types/item';
import { items } from '../../data/itens';
import { Buscador } from './buscador/buscador';
import { MyChart } from 'components/charts';

export const FluxoCaixa = () => {
  const [busca, setBusca] = useState('');
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [lista, setLista] = useState(items);
  const [selects, setSelects] = useState('');

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
  }, [lista, busca]);

  const handleAddItem = (item: Item) => {
    const novaLista = [...lista];

    novaLista.push(item);
    setLista(novaLista);
  };

  return(
    <>
      <Titulo />
      <Cards entrada={entrada} saida={saida} busca={busca} valores={lista}  />
      <div>
        <input type='date'></input>
        <input type='date'></input>
        <select value={selects} onChange={e => setSelects(e.target.value)}>
          <option></option>
          <option>Departamento</option>
          <option>Documento</option>
        </select>
      </div>
      <MyChart />
      <AddFluxoCaixa onAdd={handleAddItem} />
      <div>
        <Buscador busca={busca} setBusca={setBusca} />
      </div>
      <TabelaCaixa busca={busca} items={lista} />
    </>
  );
};