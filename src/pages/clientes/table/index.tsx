import styles from './Table.module.scss';
import { contract } from 'data/contratos';
import { formatDate } from 'helpers/dateFormat';
import { AiOutlineEye, AiOutlineCheck } from 'react-icons/ai';
import { FiDownload, FiEdit2, FiAlertCircle } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Pagination } from 'components/pagination';
import Filters from '../Filters';

const thead = [
  {label: 'ID'}, 
  {label: 'Cliente'}, 
  {label: 'CNPJ'},
  {label: 'Reajuste'},
  {label: 'Serviço'}, 
  {label: 'Valor atual (R$)'}, 
  {label: 'Data contrato'},
  {label: 'Tipo faturamento'},
  {label: 'Situação'},
  {label: 'Ações'}, 
];

const TableContract = () => {
  const [listContract, setListContract] = useState(contract);
  const [busca, setBusca] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 10;
  const currentPages = pageNumber * itemPerPage;
  const pageCount = Math.ceil(contract.length / itemPerPage);
  const changePage = (event: { selected: number; }) => {
    setPageNumber(event.selected);
  };
  const tbody = listContract.slice(currentPages, currentPages + itemPerPage).map((item) => (
    <tr className={styles.tr} key={item.id}>
      <td className={styles.td}>{item.id}</td>
      <td className={styles.td}>
        <div className={styles.indentify}>
          <strong>{item.empresa}</strong>
          <span>{item.email.principal}</span>
        </div>
      </td>
      <td className={styles.td}>{item.cnpj}</td>
      <td className={styles.td}>
        <div className={styles.icon}>
          <div className={item.situacao !== 'inativo' && item.contratoRenovado === 'sim' ? `${styles.colorTrue}` : `${styles.colorFalse}` }>
            {item.situacao !== 'inativo' && item.contratoRenovado === 'sim'  ? <AiOutlineCheck /> : <FiAlertCircle />}
          </div>
        </div>
      </td>
      <td className={styles.td}>{item.servico}</td>
      <td className={styles.td}>R$ {item.vlrReajustado.toFixed(2)}</td>
      <td className={styles.td}>{formatDate(item.contrato)}</td>
      <td className={styles.td}>{item.faturamento}</td>
      <td className={styles.td}>
        <div id={item.situacao.toLowerCase()}
          className={styles.contract}
        >
          {item.situacao}
        </div>
      </td>
      <td className={styles.td}>
        <div className={styles.buttons}>
          <button title='Visualizar contrato'><AiOutlineEye /></button>
          <button title='Editar contrato'><FiEdit2 /></button>
          <button title='Baixar contrato'><FiDownload /></button>
        </div>
      </td>
    </tr>
  ));

  useEffect(() => {
    const newList = contract.filter(item => 
      verificaBusca(item.empresa) || verificaBusca(item.servico) || verificaBusca(item.faturamento) || verificaBusca(item.situacao));
    setListContract(newList);
  }, [busca]);

  function verificaBusca(title: string){
    const regex = new RegExp(`^${busca}`, 'i');
    return regex.test(title);
  }

  return(
    <>
      <section className={styles.tableBox}>
        <Filters busca={busca} setBusca={setBusca} />
        <div className={styles.tableContent}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                {thead.map(item => (
                  <th className={styles.th} key={item.label}>{item.label}</th>
                ))}
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {tbody}
            </tbody>
          </table>
        </div>
      </section>
      <Pagination pageCount={pageCount} onPageChange={changePage} />
    </>
  );
};

export default TableContract;