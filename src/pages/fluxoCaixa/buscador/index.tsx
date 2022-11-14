import styles from './buscador.module.scss';
import { FaSearch } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { DataFilter } from 'components/dataFilter';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { SearchByTag } from 'components/searchTag';

interface Props {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter: (e: any) => void;
}

export const Buscador = ({ busca, setBusca, filter }: Props) => {
  const departamentos = [
    {
      label : 'Filtro por Depto', 
      value: ''
    }, 
    {
      label : 'Administrativo',
      value: 'Administrativo'
    }, 
    {
      label : 'Financeiro', 
      value: 'Financeiro'
    }, 
    {
      label : 'Officeboy', 
      value: 'Officeboy'
    }, 
    {
      label : 'Operacional', 
      value: 'Operacional'
    }, 
    {
      label : 'RH', 
      value: 'RH'
    }, 
    {
      label : 'Terceirizado', 
      value: 'Terceirizado'
    }
  ];
  const dateValues = [
    {
      label: 'Filtro por data',
      value : -1
    },
    {
      label: 'Hoje',
      value : 0
    },
    {
      label: '7 dias',
      value : 7
    },
    {
      label: '15 dias',
      value : 15
    },
    {
      label: '30 dias',
      value : 30
    },
  ];

  function filterTag(value: string) {
    if(busca === value) return setBusca('');
    return setBusca(value);
  }
  
  return ( 
    <div className={styles.busca}>
      <div className={styles.busca__pesquisar}>
        <FaSearch size={22} />
        <input
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder='Pesquisar por item ou local'
          type={'search'}
        />
      </div>
      <div className={styles.busca__tags}>
        <SearchByTag busca={busca} value={'Entrada'} onClick={() => filterTag('Entrada')}>Entradas</SearchByTag>
        <SearchByTag busca={busca} value={'Saída'} onClick={() => filterTag('Saída')}>Saídas</SearchByTag>
        <SearchByTag busca={busca} value={'NFCe'} onClick={() => filterTag('NFCe')}>NFCe</SearchByTag>
        <DataFilter filter={setBusca} opcoes={departamentos} icon={<RiArrowDropDownLine size={40} />} />
        <DataFilter filter={filter} opcoes={dateValues} icon={< HiOutlineAdjustments size={20} color='#898989' />} />
      </div>
    </div>
  );
};
