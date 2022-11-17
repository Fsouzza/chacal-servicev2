import styles from './AddContract.module.scss';
import { FiDownload } from 'react-icons/fi';
import { contract } from 'data/contratos';
import { CSVLink } from 'react-csv';

const headers = [
  {label: 'Id Contrato', key: 'numero'},
  {label: 'Cliente', key: 'empresa'},
  {label: 'CNPJ', key: 'cnpj'},
  {label: 'Serviço', key: 'servico'},
  {label: 'Valor Reajustado', key: 'vlrReajustado'},
  {label: 'Data Contrato', key: 'contrato'},
  {label: 'Faturamento', key: 'faturamento'},
  {label: 'Situação', key: 'situacao'},
];

const AddContract = () => {
  return(
    <section className={styles.addBox}>
      <div className={styles.buttons}>
        <CSVLink data={contract} headers={headers} filename={'ControleClientes'} className={styles.buttons__export}>
          <FiDownload size={22} />
          Export
        </CSVLink>
        <button className={styles.buttons__add}>
          Add Cliente
        </button>
      </div>
    </section>
  );
};

export default AddContract;