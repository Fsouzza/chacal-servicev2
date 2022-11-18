import styles from './Snackbar.module.scss';
import { BsCheck2Circle, BsExclamationDiamond } from 'react-icons/bs';
import { useState } from 'react';

interface Snackbar {
  type: string;
  message: string
}


const Snackbar = ({type, message}: Snackbar) => {
  const [isOpen] = useState(false);

  return(
    <div 
      className={styles.snackbar}
      id={isOpen ? 'show' : 'hide'}
      style={{
        backgroundColor: type === 'success' ? '#00b706' : '#E43939'
      }}
    >
      <div className={styles.icon}>
        {type === 'success' ? <BsCheck2Circle /> : <BsExclamationDiamond />}
      </div>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Snackbar;