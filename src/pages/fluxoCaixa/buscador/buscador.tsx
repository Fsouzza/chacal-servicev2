import styles from './buscador.module.scss';
import { FaSearch } from 'react-icons/fa';

interface Props {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export const Buscador = ({ busca, setBusca }: Props) => {
  return ( 
    <section className={styles.sBusca}>
      <div className={styles.pesquisar}>
        <input
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
          placeholder='Pesquisar'
        />
        <FaSearch size={24} color='#5122c0' />
      </div>
      <div className={styles.tags}>
        <select onChange={(evento) => setBusca(evento.target.value)}>
          <option value=''>Lançamento</option>
          <option value='Entrada'>Entrada</option>
          <option value='Saída'>Saída</option>
        </select>
        <select onChange={(evento) => setBusca(evento.target.value)}>
          <option value=''>Documento</option>
          <option value='Recibo'>Recibo</option>
          <option value='NF'>Nota fiscal</option>
        </select>
      </div>
    </section>
  );
};
