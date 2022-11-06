import styles from './titulo.module.scss';
import { FiDownload } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import { username } from 'helpers/username';
import { ModalCashFlow } from 'pages/fluxoCaixa/modalCashFlow';
import { useState } from 'react';

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
          <button className={styles.botoes__export}>
            <FiDownload size={20} />
            Export CSV
          </button>
        </li>
      </ul>
    </section>
  );
};