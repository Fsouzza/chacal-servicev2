import styles from './cards.module.scss';
import { BsCreditCard, BsFillCartXFill, BsCash, BsArrowRepeat } from 'react-icons/bs';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import CountUp from 'react-countup';
import { Item } from 'types/item';

type Props = {
  busca: string,
  entrada: number,
  saida: number,
  valores: Item[]
}

export const Cards = ({ entrada, saida }: Props) => {
  const total = entrada - saida;
  const porcentagem = total / 100;
  

  return(
    <section className={styles.cards}>
      <article className={styles.cards__card}>
        <BsCreditCard size={34} color={'#038C3E'} />
        <h4 className={styles.cards__titulo}>Total de Entrada</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={entrada}
              duration={1}
              decimals={2}
              decimal=","
              prefix='R$ '
            />
          </span>
          <BsFillArrowUpCircleFill size={22} color={'#add193'}  />
        </div>
      </article>
      <article className={styles.cards__card}>
        <BsFillCartXFill size={34} color={'#ff4f37'} />
        <h4 className={styles.cards__titulo}>Total de Saída</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={saida}
              duration={1}
              decimals={2}
              decimal=","
              prefix='R$ '
            />
          </span>
          <BsFillArrowDownCircleFill size={22} color={'#d54724'} />
        </div>
      </article>
      <article className={styles.cards__card}>
        <BsCash size={34} color={'#628DFB'} />
        <h4 className={styles.cards__titulo}>Saldo em Caixa</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={total}
              duration={1}
              decimals={2}
              decimal=","
              prefix='R$ '
            />
          </span>
          <BsArrowRepeat size={30} color={'#497391'} />
        </div>
      </article>
      <article className={styles.cards__card}>
        <IoAnalyticsSharp size={34} color={'#36DBCE'} />
        <h4 className={styles.cards__titulo}>Porcentagem de lucro</h4>
        <div className={styles.cards__descricao}>
          <span className={styles.cards__subtitulo}>
            <CountUp
              start={0}
              end={porcentagem}
              duration={1}
              decimals={2}
              decimal=","
              suffix=' %'
            />
          </span>
          {porcentagem > 0 ? <FiArrowUpRight size={30} color={'#7EDBA8'} /> : <FiArrowDownRight size={30} color={'#DB8773'} />}
        </div>
      </article>
    </section>
  );
};