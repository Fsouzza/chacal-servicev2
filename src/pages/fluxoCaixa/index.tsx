import { Cards } from './cards';
import { TabelaCaixa } from './tabelaRegistro';
import { Titulo } from './titulo/titulo';
import { useState, useEffect } from 'react';
import { items } from 'data/itens';
import { Buscador } from './buscador';
import MyChart from 'components/charts';
import { filterTableByDateTags } from 'helpers/chartFilter';

const FluxoCaixa = () => {
  const [busca, setBusca] = useState('');
  const [lista, setLista] = useState(items);
  
  const filterByDate = (date: number) => {
    filterTableByDateTags;
    date < 0 ? setLista(items) : setLista(filterTableByDateTags(date));
  };
  
  function verificaBusca(title: string){
    const regex = new RegExp(`^${busca}`, 'i');
    return regex.test(title);
  }

  useEffect(()=> {
    const listaBusca = items.filter(item => 
      verificaBusca(item.item)
      || verificaBusca(item.tipo) 
      || verificaBusca(item.departamento) 
      || verificaBusca(item.local)
      || verificaBusca(item.lancamentos)
    );
    setLista(listaBusca);
  }, [items, busca]);

  return(
    <>
      <Titulo />
      <Cards />
      <MyChart />
      <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
      <TabelaCaixa items={lista} />
    </>
  );
};

export default FluxoCaixa;