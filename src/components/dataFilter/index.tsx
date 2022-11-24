import styles from './dataFilter.module.scss';
import { Ifilter } from 'types/filter';
import { memo } from 'react';

const DataFilter = ({ filter, opcoes , icon}: Ifilter) => {
  return(
    <>
      <div className={styles.searchSelect}>
        <select onChange={(e) => filter(e.currentTarget.value)} className={styles.select}>
          {opcoes.map( (opcao, index) => (
            <option key={index} value={opcao.value}>{opcao.label}</option>
          ))}
        </select>
        <span>{icon}</span>
      </div>
    </>
  );
};

export default memo(DataFilter);