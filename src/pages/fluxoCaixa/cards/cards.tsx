import styles from './cards.module.scss';
import { BsCreditCard, BsFillCartXFill, BsCash, BsArrowRepeat } from 'react-icons/bs';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { TbTrendingUp, TbTrendingDown } from 'react-icons/tb';
import CountUp from 'react-countup';
import { Card } from './card';

type Props = {
  entrada: number
  porcentagem: number
  saida: number
  total: number
}

export const Cards = ({ entrada, saida, total, porcentagem }: Props) => {
 
  return(
    <section className={styles.cards}>
      <Card 
        titulo='Total de entrada' 
        icon={<BsCreditCard size={34} color={'#038C3E'} />} 
        indicador={<BsFillArrowUpCircleFill size={22} color={'#add193'} />}
      >
        <CountUp
          start={0}
          end={entrada}
          duration={1}
          decimals={2}
          decimal=","
          separator='.'
          prefix='R$ '
        />
      </Card>
      <Card 
        titulo='Total de saída' 
        icon={<BsFillCartXFill size={34} color={'#F23D3D'} />} 
        indicador={<BsFillArrowDownCircleFill size={22} color={'#d54724'} />}
      >
        <CountUp
          start={0}
          end={saida}
          duration={1}
          decimals={2}
          decimal=","
          separator='.'
          prefix='R$ '
        />
      </Card>
      <Card 
        titulo='Saldo em caixa' 
        icon={<BsCash size={34} color={'#628DFB'} />} 
        indicador={total > 0 ? <BsArrowRepeat size={30} color={'#497391'} /> : <FiAlertCircle size={30} color={'#c34743'} />}
      >
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
      </Card>
      <Card 
        titulo='Porcentagem orçamentaria' 
        icon={<IoAnalyticsSharp size={34} color={'#36DBCE'} />} 
        indicador={porcentagem > 0 ? <TbTrendingUp size={30} color={'#7EDBA8'} /> : <TbTrendingDown size={30} color={'#c34743'} />}
      >
        <CountUp
          className={porcentagem > 0 ? '' : `${styles.negativo}`}
          start={0}
          end={porcentagem}
          duration={1}
          decimals={2}
          decimal=","
          suffix=' %'
        />
      </Card>
    </section>
  );
};