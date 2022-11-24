import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchComponent.module.scss';
import { memo, useMemo } from 'react';

interface PropsSearch {
	busca: string;
	setBusca: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
}

const SearchComponent = ({ busca, setBusca, placeholder }: PropsSearch) => {
  const txtPlaceholder = `${placeholder}`;
  const searchIcon = useMemo(() => <FaSearch size={22} />, []);

  return(
    <div className={styles.search}>
      {searchIcon}
      <div className={styles.input}>
        <input
          className={styles.inputContent}
          type='search'
          placeholder={txtPlaceholder}
          value={busca}
          onChange={(evento) => setBusca(evento.target.value)}
        />
        <span className={styles.clear}>{busca !== '' ? <IoCloseSharp size={22} /> : null}</span>
      </div>
    </div>
  );
};

export default memo(SearchComponent);