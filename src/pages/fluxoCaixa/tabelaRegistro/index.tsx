import { formatDate } from 'helpers/dateFormat';
import styles from './tabelaRegistro.module.scss';
import { useEffect, useState } from 'react';
import { BiTrash } from 'react-icons/bi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { filterTableByDateTags } from 'helpers/chartFilter';
import { Buscador } from '../buscador';
import { items } from 'data/itens';
import { Pagination } from 'components/pagination';

const TabelaCaixa = () => {
  const [busca, setBusca] = useState('');
  const [lista, setLista] = useState(items);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 12;
  const currentPages = pageNumber * itemPerPage;
  const pageCount = Math.ceil(lista.length / itemPerPage);
  const changePage = (event: { selected: number; }) => {
    setPageNumber(event.selected);
  };
  const columns = [
    {label: 'Nº ID'},
    {label: 'Item'},
    {label: 'Data'},
    {label: 'Lançamento'},
    {label: 'Documento'},
    {label: 'Categoria'},
    {label: 'Departamento'},
    {label: 'Local'},
    {label: 'Valor (R$)'},
    {label: 'Obersevação'},
    {label: 'Ação'},
  ];

  function filterByDate(date: number) {
    filterTableByDateTags;
    date < 0 ? setLista(items) : setLista(filterTableByDateTags(date));
  }

  function verificaBusca(title: string){
    const regex = new RegExp(`^${busca}`, 'i');
    return regex.test(title);
  }

  useEffect(()=> {
    const listaBusca = items.filter(item => 
      verificaBusca(item.item) || verificaBusca(item.tipo) || verificaBusca(item.departamento) || verificaBusca(item.local) || verificaBusca(item.lancamentos)
    );
    setLista(listaBusca);
  }, [busca]);

  const displayTable = lista.sort((a,b) => a.date < b.date ? 1 : -1).slice(currentPages, currentPages + itemPerPage).map((item, index) => (
    <tr key={index} className={styles.tr}>
      <td className={styles.td}>{item.id}</td>
      <td className={styles.td}>{item.item}</td>
      <td className={styles.td}>{formatDate(item.date)}</td>
      <td className={styles.td}>
        <div className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
          <div className={styles.lancamento}>
            <div>
              {item.lancamentos === 'Entrada' ? <IoIosArrowUp size={12} /> : < IoIosArrowDown size={12} /> }
            </div>
            {item.lancamentos}
          </div>
        </div>
      </td>
      <td className={styles.td}>{item.tipo}</td>
      <td className={styles.td}>{item.categoria}</td>
      <td className={styles.td}>{item.departamento}</td>
      <td className={styles.td}>{item.local}</td>
      <td className={styles.td}>
        <div className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
          R$ {item.valor.toFixed(2)}
        </div>
      </td>
      <td className={styles.td}>{item.obs}</td>
      <td className={styles.td}>
        <button aria-label='Deletar item' title='Deletar item' className={styles.trash}>
          <BiTrash />
        </button>
      </td>
    </tr>
  ));

  return(
    <>
      <section className={styles.secao}>
        <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
        <div className={styles.tableContent} >
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}> 
                {columns.map((coluna) => (
                  <th className={styles.th} key={coluna.label}>{coluna.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              { displayTable }
            </tbody>
          </table>
        </div>
      </section>
      <Pagination pageCount={pageCount} onPageChange={changePage} />
    </>
  );
};

export default TabelaCaixa;