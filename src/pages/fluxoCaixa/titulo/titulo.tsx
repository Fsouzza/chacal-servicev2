import styles from './titulo.module.scss';
import { FiDownload } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import { username } from 'helpers/username';
import { ModalCashFlow } from 'pages/fluxoCaixa/modalCashFlow';
import { useState } from 'react';
import { CSVLink } from 'react-csv';
import { items } from './../../../data/itens';

const headers = [
  {label: 'ID', key: 'id'},
  {label: 'Item', key: 'item'},
  {label: 'Data', key: 'date'},
  {label: 'Lançamento', key: 'lancamentos'},
  {label: 'Documento', key: 'tipo'},
  {label: 'Categoria', key: 'categoria'},
  {label: 'Departamento', key: 'departamento'},
  {label: 'Local', key: 'local'},
  {label: 'Valor', key: 'valor'},
  {label: 'Observação', key: 'obs'},
];

export const Titulo = () => {
  const [modalCashFlow, setModalCashFlow] = useState(false);

  return(
    <section className={styles.cardTitulo}>
      <div className={styles.texto}>
        <h2>Olá {username}, bem-vindo de volta!</h2>
        <span>Analise seus movimentos de caixa</span>
      </div>
      <ul className={styles.botoes}>
        <li>
          <button className={styles.botoes__add} onClick={() => setModalCashFlow(true)}>
            <BsPlusLg />
            Add Produto
          </button>
          <ModalCashFlow 
            open={modalCashFlow} 
            close={() => setModalCashFlow(false)}
          />
        </li>
        <li>
          <CSVLink data={items} headers={headers} filename={'fluxoDeCaixa'} className={styles.botoes__export}>
            <FiDownload size={20} />
            Export CSV
          </CSVLink>
        </li>
      </ul>
    </section>
  );
};