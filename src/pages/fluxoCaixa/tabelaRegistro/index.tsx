import { Item } from '../../../types/item';
import { formatDate } from '../../../helpers/dateFilter';
import styles from './tabelaRegistro.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  items: Item[],
  busca: string,
}

export const TabelaCaixa = (props: Props) => {
  const {items, busca} = props;
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
  }, [items, busca]);

  const colunas = [
    {header: 'ID'},
    {header: 'Item'},
    {header: 'Documento'},
    {header: 'Categoria'},
    {header: 'Data'},
    {header: 'Lançamento'},
    {header: 'Departamento'},
    {header: 'Local'},
    {header: 'Valor'},
    {header: 'Oberseração'}
  ];

  return(
    <section className={styles.secao}>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Item</td>
            <td>Documento</td>
            <td>Categoria</td>
            <td>Data</td>
            <td>Lançamento</td>
            <td>Departamento</td>
            <td>Local</td>
            <td>Valor</td>
            <td>Observação</td>
          </tr>
        </thead>
        <tbody>
          {lista.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.item}</td>
              <td>{item.tipo}</td>
              <td>{item.categoria}</td>
              <td>{formatDate(item.date)}</td>
              <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
                <div className={item.lancamentos === 'Entrada' ? `${styles.txtGreen}` : `${styles.txtRed}`}></div>
                {item.lancamentos}
              </td>
              <td>{item.departamento}</td>
              <td>{item.local}</td>
              <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
                R$ {item.valor.toFixed(2)}
              </td>
              <td>{item.obs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};