import Snackbar from 'components/snackbar';
import { ReactNode, useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import styles from './modalWindow.module.scss';

export interface modalProps {
  children: ReactNode,
  title: string,
  open: boolean,
  close: () => void
}

export const ModalWindow = ({ children, title, open, close}: modalProps) => {
  if(!open) {
    return <></>;
  }

  const snackbarRef = useRef(null);

  return(
    <>
      <div onClick={close} className={styles.modal} />
      <Snackbar
        ref={snackbarRef}
        message='Cadastro realizado com sucesso' 
        type='success'
      />
      <form className={styles.modal__form}>
        <div className={styles.modal__wrapper} 
        >
          <h2>{title}</h2>
          <div onClick={close} className={styles.modal__wrapper__close}>
            <CgClose />
          </div>
        </div>
        {children}
      </form>
    </>
  );
};