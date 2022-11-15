import { DataFilter } from 'components/dataFilter';
import styles from './Filters.module.scss';
import styles2 from '../../fluxoCaixa/buscador/buscador.module.scss';
import { BsCash } from 'react-icons/bs';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { BsSortAlphaDown } from 'react-icons/bs';
import { SearchByTag } from 'components/searchTag';
import { SearchComponent } from 'components/search';

interface PropsFilterSearch {
  busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Filters = ({ busca, setBusca }: PropsFilterSearch ) => {
  const optionContracts = [
    {label: 'Situação cadastral', value: ''},
    {label: 'Ativo', value: 'Ativo'},
    {label: 'Inativo', value: 'Inativo'},
    {label: 'Pendente', value: 'Pendente'},
  ];
  const optionInvoice = [
    {label: 'Tipos de cobranças', value: ''},
    {label: 'Semanal', value: 'Semanal'},
    {label: 'Quinzenal', value: 'Quinzenal'},
    {label: 'Mensal', value: 'Mensal'},
  ];
  const optionSort = [
    {label: 'Ordenar por', value: ''},
    {label: 'A-Z', value: 'A'},
    {label: 'Z-A', value: 'Z'},
  ];
  
  function filterTag(value: string) {
    if(busca === value) return setBusca('');
    return setBusca(value);
  }

  return(
    <section className={styles.filter}>
      <div className={styles.filter__titulo}>
        <h2>Filtros</h2>
      </div>
      <div className={styles.filter__box}>
        <div className={styles.searchBorder}>
          <SearchComponent placeholder='Pesquise por cliente' busca={busca} setBusca={setBusca} />
        </div>
        <div className={styles2.filtersTags}>
          <SearchByTag busca={busca} value={'MDO'} onClick={() => filterTag('MDO')}>MDO</SearchByTag>
          <SearchByTag busca={busca} value={'frota'} onClick={() => filterTag('frota')}>FROTA</SearchByTag>
          <DataFilter opcoes={ optionInvoice} filter={setBusca} icon={<BsCash size={24} />} />
          <DataFilter opcoes={optionContracts} filter={setBusca} icon={<HiOutlineAdjustments size={22} />} />
          <DataFilter opcoes={optionSort} filter={() => []} icon={<BsSortAlphaDown size={22} />} />
        </div>
      </div>
    </section>
  );
};

export default Filters;