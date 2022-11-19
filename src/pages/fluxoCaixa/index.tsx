import Cards from './cards';
import TabelaCaixa from './tabelaRegistro';
import Titulo from './titulo/titulo';
import MyChart from 'components/charts';
import ScrollBackToTop from 'components/scrollToTop';

const FluxoCaixa = () => {
  return(
    <>
      <Titulo />
      <Cards />
      <MyChart />
      <TabelaCaixa />
      <ScrollBackToTop />
    </>
  );
};

export default FluxoCaixa;