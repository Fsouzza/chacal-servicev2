import styles from '../buscador/buscador.module.scss';
import { ReactNode } from 'react';

interface Props {
  filter: (e: ReactNode) => void
  removeFilter: (e: ReactNode) => void
}

export const FiltroData = ({ filter, removeFilter }: Props) => {
  return(
    <>
      <div className={styles.tags__tag}>
        <button className={styles.tags__button} type='button' onClick={(e) => filter(e.currentTarget.value)}>
          Semanal
        </button>
      </div>
      <div className={styles.tags__tag}>
        <button className={styles.tags__button} type='button' onClick={(e) => removeFilter(e.currentTarget.value)}>
          Tudo
        </button>
      </div>
    </>
  );
};