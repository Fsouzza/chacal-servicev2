import styles from './buscador.module.scss';
import { FaSearch } from 'react-icons/fa';

interface Props {
  busca: string,
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export const Buscador = ({busca, setBusca}: Props) =>{
  return(
    <section className={styles.pesquisar}>
      <input 
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
        placeholder='Pesquisar'
      />
      <FaSearch size={24} color='#5122c0'/>
    </section>
  );
};