import styles from './Snackbar.module.scss';
import { BsCheck2Circle, BsExclamationDiamond } from 'react-icons/bs';
import { useState, forwardRef, useImperativeHandle } from 'react';

interface Snackbar {
  type: string;
  message: string
  ref: React.ForwardedRef<unknown>
}

// eslint-disable-next-line react/display-name
const Snackbar = forwardRef(({type, message, ref}: Snackbar) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    }
  }));

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
});

export default Snackbar;