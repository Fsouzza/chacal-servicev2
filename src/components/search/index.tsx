import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchComponent.module.scss';

interface PropsSearch {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

export const SearchComponent = ({ busca, setBusca, placeholder }: PropsSearch) => {
  const txtPlaceholder = `${placeholder}`;

  return(
    <div className={styles.search}>
      <FaSearch size={22} />
      <div className={styles.input}>
        <input
          className={styles.inputContent}
          type='search'
          placeholder={txtPlaceholder}
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />
        <span className={styles.clear}>{busca !== '' ? <IoCloseSharp size={22} /> : ''}</span>
      </div>
    </div>
  );
};