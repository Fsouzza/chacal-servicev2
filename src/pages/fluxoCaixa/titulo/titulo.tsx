import styles from './titulo.module.scss';
import { FiDownload } from 'react-icons/fi';
import { BsPlusLg } from 'react-icons/bs';
import { username } from 'components/header/dropdownMenus/dropDowns';

export const Titulo = () => {
  return(
    <section className={styles.cardTitulo}>
      <div className={styles.cardTitulo__texto}>
        <h2>Olá {username}, bem-vindo de volta!</h2>
        <span>Analise seus movimentos de caixa</span>
      </div>
      <div className={styles.cardTitulo__botoes}>
        <a href='#add'>
          <BsPlusLg />
          Add produto
        </a>
        <button>
          <FiDownload size={20} />
          Download PDF
        </button>
      </div>
    </section>
  );
};