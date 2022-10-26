import { Itags } from 'types/tags';
import styles from './SearchTag.module.scss';

export const SearchByTag = ({busca, onClick, children, value}: Itags) => {
  
  return(
    <div className={styles.searchTag}>
      <button 
        className={busca === value ? `${styles.searchTag__active}` : `${styles.searchTag__default}`}
        onClick={onClick}
        value={value}
      >
        {children}
      </button>
    </div>
  );
};