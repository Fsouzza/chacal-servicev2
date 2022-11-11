import styles from './filter.module.scss';
import { Ifilter } from 'types/filter';

export const FiltroData = ({ filter, opcoes , icon}: Ifilter) => {
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