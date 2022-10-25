import styles from 'pages/fluxoCaixa/buscador/buscador.module.scss';
import { Iopcoes } from 'types/opcoes';

export const FiltroData = ({ filter, opcoes , icon}: Iopcoes) => {
  return(
    <>
      <div className={styles.tags__tag}>
        <select onChange={(e) => filter(e.currentTarget.value)} className={styles.tags__select}>
          {opcoes.map( (opcao, index) => (
            <option key={index} value={opcao.value}>{opcao.label}</option>
          ))}
        </select>
        <span>{icon}</span>
      </div>
    </>
  );
};