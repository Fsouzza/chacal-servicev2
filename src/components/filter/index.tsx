import styles from './filter.module.scss';
import { Iopcoes } from 'types/opcoes';

export const FiltroData = ({ filter, opcoes , icon}: Iopcoes) => {
  return(
    <>
      <div className={styles.searchSelect}>
        <select onChange={(e) => filter(e.currentTarget.value)} className={styles.searchSelect__select}>
          {opcoes.map( (opcao, index) => (
            <option key={index} value={opcao.value}>{opcao.label}</option>
          ))}
        </select>
        <span>{icon}</span>
      </div>
    </>
  );
};