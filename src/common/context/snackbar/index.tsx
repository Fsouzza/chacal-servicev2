import styles from './Snackbar.module.scss';
import { BsCheck2Circle, BsExclamationDiamond } from 'react-icons/bs';
import { useContext } from 'react';
import { SnackbarContext } from 'common/context/SnackbarContext';

interface Snackbar {
  type: string;
  message: string
}


const Snackbar = () => {
  const snack = useContext(SnackbarContext);

  return(
    <div 
      className={styles.snackbar}
      style={{
        backgroundColor: snack.success.corFundo
      }}
    >
      <div className={styles.icon}>
        {snack.success.type === 'Success' ? <BsCheck2Circle /> : <BsExclamationDiamond />}
      </div>
      <div className={styles.message}>{snack.success.message}</div>
    </div>
  );
};

export default Snackbar;