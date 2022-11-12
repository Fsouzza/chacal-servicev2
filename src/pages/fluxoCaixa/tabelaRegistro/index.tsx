import { formatDate } from 'helpers/dateFormat';
import styles from './tabelaRegistro.module.scss';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { BiTrash } from 'react-icons/bi';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { filterTableByDateTags } from 'helpers/chartFilter';
import { Buscador } from '../buscador';
import { items } from 'data/itens';

const TabelaCaixa = () => {
  const [busca, setBusca] = useState('');
  const [lista, setLista] = useState(items);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 12;
  const currentPages = pageNumber * itemPerPage;
  const columns = [
    {
      label: 'Nº ID'
    },
    {
      label: 'Item'
    },
    {
      label: 'Data'
    },
    {
      label: 'Lançamento'
    },
    { 
      label: 'Documento'
    },
    {
      label: 'Categoria'
    },
    {
      label: 'Departamento'
    },
    {
      label: 'Local'
    },
    {
      label: 'Valor'
    },
    {
      label: 'Oberseração'
    },
    {
      label: 'Ação'
    }
  ];
  const displayTable = lista.sort((a,b) => a.date < b.date ? 1 : -1).slice(currentPages, currentPages + itemPerPage).map((item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.item}</td>
      <td>{formatDate(item.date)}</td>
      <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
        <div className={item.lancamentos === 'Entrada' ? `${styles.txtGreen}` : `${styles.txtRed}`}></div>
        {item.lancamentos}
      </td>
      <td>{item.tipo}</td>
      <td>{item.categoria}</td>
      <td>{item.departamento}</td>
      <td>{item.local}</td>
      <td className={item.lancamentos === 'Entrada' ? `${styles.valueGreen}` : `${styles.valueRed}`}>
        R$ {item.valor.toFixed(2)}
      </td>
      <td>{item.obs}</td>
      <td><button aria-label='Deletar item' title='Deletar item' className={styles.trash}><BiTrash /></button></td>
    </tr>
  ));
  const pageCount = Math.ceil(items.length / itemPerPage);
  const changePage = (event: { selected: number; }) => {
    setPageNumber(event.selected);
  };

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
      verificaBusca(item.item)
      || verificaBusca(item.tipo) 
      || verificaBusca(item.departamento) 
      || verificaBusca(item.local)
      || verificaBusca(item.lancamentos)
    );
    setLista(listaBusca);
  }, [busca]);

  return(
    <section className={styles.secao}>
      <div className={styles.tableContent} >
        <Buscador busca={busca} setBusca={setBusca} filter={filterByDate}  />
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((coluna, index) => (
                <td key={index}>{coluna.label}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            { displayTable }
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={<MdOutlineKeyboardArrowLeft size={26} />}
        nextLabel={<MdOutlineKeyboardArrowRight size={26} />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={`${styles.pagination}`}
        previousLinkClassName={`${styles.pagination__bttns}`}
        nextLinkClassName={`${styles.pagination__bttns}`}
        disabledClassName={`${styles.pagination__disabled}`}
        activeClassName={`${styles.pagination__active}`}
        pageLinkClassName={`${styles.pagination__link}`}     
      />
    </section>
  );
};

export default TabelaCaixa;