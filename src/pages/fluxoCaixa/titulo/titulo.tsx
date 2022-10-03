import styles from './titulo.module.scss';
import { FiDownload } from 'react-icons/fi';

export const Titulo = () => {
  return(
    <section className={styles.cardTitulo}>
      <div className={styles.cardTitulo__texto}>
        <h2>Olá, bem-vindo de volta!</h2>
        <span>Analise seus movimentos de caixa</span>
      </div>
      <div className={styles.cardTitulo__botoes}>
        <a href='#add'>
          Add Produto
        </a>
        <button>
          <FiDownload size={20} />
          Download PDF
        </button>
      </div>
    </section>
  );
};