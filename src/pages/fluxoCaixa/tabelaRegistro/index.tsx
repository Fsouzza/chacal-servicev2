import { Item } from '../../../types/item';
import { formatDate } from '../../../helpers/dateFilter';
import styles from './tabelaRegistro.module.scss';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';

type Props = {
  items: Item[],
}

export const TabelaCaixa = (props: Props) => {
  const { items } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 12;
  const currentPages = pageNumber * itemPerPage;
  const colunas = [
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
    }
  ];
  const displayTable = items.sort((a,b) => a.date < b.date ? 1 : -1).slice(currentPages, currentPages + itemPerPage).map((item, index) => (
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
    </tr>
  ));
  const pageCount = Math.ceil(items.length / itemPerPage);
  const changePage = (event: { selected: number; }) => {
    setPageNumber(event.selected);
  };

  return(
    <section className={styles.secao}>
      <table className={styles.tabela}>
        <thead>
          <tr>
            {colunas.map((coluna, index) => (
              <td key={index}>{coluna.label}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          { displayTable }
        </tbody>
      </table>
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