import Cards from './cards';
import TabelaCaixa from './tabelaRegistro';
import Titulo from './titulo/titulo';
import MyChart from 'components/charts';

const FluxoCaixa = () => {
  return(
    <>
      <Titulo />
      <Cards />
      <MyChart />
      <TabelaCaixa />
    </>
  );
};

export default FluxoCaixa;