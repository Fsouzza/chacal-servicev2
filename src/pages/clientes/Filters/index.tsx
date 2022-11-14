import { DataFilter } from 'components/dataFilter';
import styles from './Filters.module.scss';
import { BsCash } from 'react-icons/bs';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { SearchByTag } from 'components/searchTag';

interface PropsFilterSearch {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter: (e: any) => void;
}

const Filters = ({ filter }: PropsFilterSearch ) => {
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

  return(
    <section className={styles.filter}>
      <div>
        <h2>Filtros</h2>
      </div>
      <div className={styles.filtersTags}>
        <SearchByTag busca={''} value={'MDO'} onClick={() => filter('MDO')}>NFCe</SearchByTag>
        <DataFilter opcoes={ optionInvoice} filter={filter} icon={<BsCash size={24} />} />
        <DataFilter opcoes={optionContracts} filter={filter} icon={<HiOutlineAdjustments size={22} />} />
      </div>
    </section>
  );
};

export default Filters;