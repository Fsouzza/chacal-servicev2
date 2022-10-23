import styles from './buscador.module.scss';
import { FaSearch } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiltroData } from './../filtro/filtro';

interface Props {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter: (e: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  removeFilter: (e: any) => void;
}

export const Buscador = ({ busca, setBusca, filter, removeFilter }: Props) => {
  const departamentos = [{'nome' : 'Depto', 'value': ''}, {'nome' : 'Administrativo', 'value': 'Administrativo'}, {'nome' : 'Financeiro', 'value': 'Financeiro'}, {'nome' : 'Officeboy', 'value': 'Officeboy'}, {'nome' : 'Operacional', 'value': 'Operacional'}, {'nome' : 'RH', 'value': 'RH'}, {'nome' : 'Terceirizado', 'value': 'Terceirizado'}];
  
  function filterTag(value: string) {
    if(busca === value) return setBusca('');
    return setBusca(value);
  }
  
  return ( 
    <>
      <div className={styles.pesquisar}>
        <input
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder='Pesquisar'
        />
        <FaSearch size={22} color='#5a6af9' />
      </div>
      <div className={styles.tags}>
        <div className={styles.tags__tag}>
          <button className={busca === 'Entrada' ? `${styles.btnActive}` : `${styles.tags__button}`} onClick={() => filterTag('Entrada')}>
            Entradas
          </button>
        </div>
        <div className={styles.tags__tag}>
          <button className={busca === 'Saída' ? `${styles.btnActive}` : `${styles.tags__button}`} onClick={() => filterTag('Saída')}>
            Saídas
          </button>
        </div>
        <div className={styles.tags__tag}>
          <button className={busca === 'NFCe' ? `${styles.btnActive}` : `${styles.tags__button}`} onClick={() => filterTag('NFCe')}>
            NFCe
          </button>
        </div>
        <FiltroData filter={filter} removeFilter={removeFilter} />
        <div className={styles.tags__tag}>
          <select onChange={(evento) => setBusca(evento.target.value)}>
            {departamentos.map((dpto, index) => (
              <option key={index} value={dpto.value}>{dpto.nome}</option>
            ))}
          </select>
          <span><RiArrowDropDownLine size={40} /></span>
        </div>
      </div>
    </>
  );
};
