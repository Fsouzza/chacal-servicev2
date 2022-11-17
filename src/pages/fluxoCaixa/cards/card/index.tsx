import { ReactElement, ReactNode } from 'react';
import styles from './card.module.scss';

type PropsCard = {
  children: ReactElement
  icon: ReactNode
  titulo: string
  indicador: ReactNode
}

export const Card = ({children, icon, titulo, indicador}: PropsCard) => {
  return(
    <article className={styles.card}>
      {icon}
      <h4 className={styles.card__titulo}>{titulo}</h4>
      <div className={styles.card__descricao}>
        <span className={styles.card__subtitulo}>
          {children}
        </span>
        {indicador}
      </div>
    </article>
  );
};