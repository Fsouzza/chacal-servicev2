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
    filterTableByDateTags;
    date < 0 ? setLista(items) : setLista(filterTableByDateTags(date));
  };

  function lancamentos(lancamento: string){
    return items.filter((item) => item.lancamentos === lancamento).reduce((acc, cur) => acc + cur.valor, 0);
  }

  useEffect(()=> {
    const somaEntrada = lancamentos('Entrada');
    const somaSaida = lancamentos('Saída');
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
      <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
      <TabelaCaixa items={lista} />
    </>
  );
};

export default FluxoCaixa;