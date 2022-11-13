import styles from './Table.module.scss';
import { contract } from 'data/contratos';
import { formatDate } from 'helpers/dateFormat';
import { AiOutlineEye } from 'react-icons/ai';
import { FiDownload, FiEdit2 } from 'react-icons/fi';

const TableContract = () => {
  const thead = [
    {label: 'ID'}, 
    {label: 'Empresa'}, 
    {label: 'CNPJ'}, 
    {label: 'Serviço'}, 
    {label: 'Valor (R$)'}, 
    {label: 'Data contrato'},
    {label: 'Tipo Faturamento'},
    {label: 'Situação'},
    {label: 'Renov. Contratual'},
    {label: 'Ações'}, 
  ];

  return(
    <section className={styles.tableBox}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            {thead.map(item => (
              <th className={styles.th} key={item.label}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {contract.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>{item.id}</td>
              <td className={styles.td}>{item.empresa}</td>
              <td className={styles.td}>{item.cnpj}</td>
              <td className={styles.td}>{item.servico}</td>
              <td className={styles.td}>{item.reajuste.toFixed(2)}</td>
              <td className={styles.td}>{formatDate(item.contrato)}</td>
              <td className={styles.td}>{item.faturamento}</td>
              <td className={styles.td}>{item.situacao}</td>
              <td className={styles.td}>{}</td>
              <td className={styles.td}>
                <div>
                  <button><AiOutlineEye /></button>
                  <button><FiEdit2 /></button>
                  <button><FiDownload /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableContract;