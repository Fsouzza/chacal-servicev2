import styles from './Snackbar.module.scss';
import { BsCheck2Circle, BsExclamationDiamond } from 'react-icons/bs';
import { VscError } from 'react-icons/vsc';
import { useContext } from 'react';
import { SnackbarContext } from 'common/context/SnackbarContext';

interface SnackbarProps {
  type: string;
  message: string;
}

const Snackbar = ({ type, message }: SnackbarProps) => {
  const snack = useContext(SnackbarContext);

  return(
    <>
      {type === snack.success.type ? 
        <div 
          className={styles.snackbar}
          style={{
            backgroundColor: snack.success.corFundo
          }}
        >
          <div className={styles.icon}>
            <BsCheck2Circle />
          </div>
          <div className={styles.message}>{message}</div>
        </div> : null
      }
      {type === snack.fail.type ? 
        <div 
          className={styles.snackbar}
          style={{
            backgroundColor: snack.fail.corFundo
          }}
        >
          <div className={styles.icon}>
            <VscError />
          </div>
          <div className={styles.message}>{message}</div>
        </div> : null
      }
      {type === snack.alert.type ? 
        <div 
          className={styles.snackbar}
          style={{
            backgroundColor: snack.alert.corFundo
          }}
        >
          <div className={styles.icon}>
            <BsExclamationDiamond />
          </div>
          <div className={styles.message}>{message}</div>
        </div> : null
      }
    </>
  );
};

export default Snackbar;
