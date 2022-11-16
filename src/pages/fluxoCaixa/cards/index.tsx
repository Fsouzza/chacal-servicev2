import styles from './cards.module.scss';
import { BsCreditCard, BsFillCartXFill, BsCash, BsArrowRepeat } from 'react-icons/bs';
import { BsFillArrowUpCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';
import { FiAlertCircle } from 'react-icons/fi';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { TbTrendingUp, TbTrendingDown } from 'react-icons/tb';
import CountUp from 'react-countup';
import { Card } from './card';
import { useEffect, useState } from 'react';
import { items } from 'data/itens';


const Cards = () => {
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);
  const [porcentagem, setPorcentagem] = useState(0);

  function lancamentos(lancamento: string){
    return items.filter((item) => item.lancamentos === lancamento).reduce((acc, cur) => acc + cur.valor, 0);
  }

  useEffect(()=> {
    const somaEntrada = lancamentos('Entrada');
    const somaSaida = lancamentos('Saída');
    const contadorTotal = somaEntrada - somaSaida;
    const contadorPorcentagem = contadorTotal / 100;
    setEntrada(somaEntrada);
    setSaida(somaSaida);
    setTotal(contadorTotal);
    setPorcentagem(contadorPorcentagem);
  }, []);
 
  return(
    <section className={styles.cards}>
      <Card 
        titulo='Total de entrada' 
        icon={<BsCreditCard size={32} color={'#00b706'} />} 
        indicador={<BsFillArrowUpCircleFill size={20} color={'#9fc882'} />}
      >
        <CountUp
          start={0}
          end={entrada}
          duration={0.5}
          decimals={2}
          decimal=","
          separator='.'
          prefix='R$ '
        />
      </Card>
      <Card 
        titulo='Total de saída' 
        icon={<BsFillCartXFill size={32} color={'#F23D3D'} />} 
        indicador={<BsFillArrowDownCircleFill size={20} color={'#d54724'} />}
      >
        <CountUp
          start={0}
          end={saida}
          duration={0.5}
          decimals={2}
          decimal=","
          separator='.'
          prefix='R$ '
        />
      </Card>
      <Card 
        titulo='Saldo em caixa' 
        icon={<BsCash size={32} color={'#628DFB'} />} 
        indicador={total > 0 ? <BsArrowRepeat size={22} color={'#497391'} /> : <FiAlertCircle size={22} color={'#c34743'} />}
      >
        <CountUp
          className={total > 0 ? '' : `${styles.negativo}`}
          start={0}
          end={total}
          duration={0.5}
          decimals={2}
          decimal=","
          separator='.'
          prefix='R$ '
        />
      </Card>
      <Card 
        titulo='Porcentagem orçamentaria' 
        icon={<IoAnalyticsSharp size={32} color={'#36DBCE'} />} 
        indicador={porcentagem > 0 ? <TbTrendingUp size={22} color={'#7EDBA8'} /> : <TbTrendingDown size={22} color={'#c34743'} />}
      >
        <CountUp
          className={porcentagem > 0 ? '' : `${styles.negativo}`}
          start={0}
          end={porcentagem}
          duration={0.5}
          decimals={2}
          decimal=","
          suffix=' %'
        />
      </Card>
    </section>
  );
};

export default Cards;