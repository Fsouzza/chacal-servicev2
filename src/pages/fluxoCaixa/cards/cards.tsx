import styles from './cards.module.scss';
import { BsCreditCard, BsFillCartXFill, BsCash, BsArrowRepeat } from 'react-icons/bs';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { TbTrendingUp, TbTrendingDown } from 'react-icons/tb';
import CountUp from 'react-countup';

type Props = {
  entrada: number,
  saida: number,
}

export const Cards = ({ entrada, saida }: Props) => {
  const total = entrada - saida;
  const porcentagem = total / 100;
  

  return(
    <section className={styles.cards}>
      <article className={styles.cards__card}>
        <BsCreditCard size={34} color={'#038C3E'} />
        <h4 className={styles.cards__titulo}>Total de entrada</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={entrada}
              duration={1}
              decimals={2}
              decimal=","
              separator='.'
              prefix='R$ '
            />
          </span>
          <BsFillArrowUpCircleFill size={22} color={'#add193'}  />
        </div>
      </article>
      <article className={styles.cards__card}>
        <BsFillCartXFill size={34} color={'#F23D3D'} />
        <h4 className={styles.cards__titulo}>Total de saída</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={saida}
              duration={1}
              decimals={2}
              decimal=","
              separator='.'
              prefix='R$ '
            />
          </span>
          <BsFillArrowDownCircleFill size={22} color={'#d54724'} />
        </div>
      </article>
      <article className={styles.cards__card}>
        <BsCash size={34} color={'#628DFB'} />
        <h4 className={styles.cards__titulo}>Saldo em caixa</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              className={total > 0 ? '' : `${styles.negativo}`}
              start={0}
              end={total}
              duration={1}
              decimals={2}
              decimal=","
              separator='.'
              prefix='R$ '
            />
          </span>
          <BsArrowRepeat size={30} color={'#497391'} />
        </div>
      </article>
      <article className={styles.cards__card}>
        <IoAnalyticsSharp size={34} color={'#36DBCE'} />
        <h4 className={styles.cards__titulo}>Porcentagem orçamentaria</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              className={porcentagem > 0 ? '' : `${styles.negativo}`}
              start={0}
              end={porcentagem}
              duration={1}
              decimals={2}
              decimal=","
              suffix=' %'
            />
          </span>
          {porcentagem > 0 ? <TbTrendingUp size={30} color={'#7EDBA8'} /> : <TbTrendingDown size={30} color={'#c34743'} />}
        </div>
      </article>
    </section>
  );
};