import { Item } from '../../../types/item';
import { formatDate } from '../../../helpers/dateFilter';
import styles from './tabelaRegistro.module.scss';
import { useEffect, useState } from 'react';
import { items } from '../../../data/itens';

type Props = {
  list: Item[],
  busca: string
}
export const TabelaCaixa = (props: Props) => {
  const {list, busca} = props;
  const [lista, setLista] = useState(items);

  function verificaBusca(title: string){
    const regex = new RegExp(busca, 'i');

    return regex.test(title);
  }

  useEffect(()=> {
    const listaBusca = items.filter(item => verificaBusca(item.item) 
      || verificaBusca(item.tipo) 
      || verificaBusca(item.departamento) 
      || verificaBusca(item.categoria)
      || verificaBusca(item.local)
    );

    setLista(listaBusca);
  }, [list, busca]);

  return(
    <section className={styles.secao}>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <td>Data</td>
            <td>Lançamento</td>
            <td>Categoria</td>
            <td>Departamento</td>
            <td>Documento</td>
            <td>ID</td>
            <td>Local</td>
            <td>Item</td>
            <td>Observação</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          {lista.map((item, index) => (
            <tr key={index}>
              <td>{formatDate(item.date)}</td>
              <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
                <div className={item.lancamentos === 'Entrada' ? `${styles.txtGreen}` : `${styles.txtRed}`}></div>
                {item.lancamentos}
              </td>
              <td>{item.categoria}</td>
              <td>{item.departamento}</td>
              <td>{item.tipo}</td>
              <td>{item.id}</td>
              <td>{item.local}</td>
              <td>{item.item}</td>
              <td>{item.obs}</td>
              <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
                R$ {item.valor.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};