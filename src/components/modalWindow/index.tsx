import { CgClose } from 'react-icons/cg';
import styles from './modalWindow.module.scss';

export interface modalProps {
  children: React.ReactNode,
  title: string,
  open: boolean,
  close: () => void,
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const ModalWindow = ({ children, title, open, close, onSubmit }: modalProps) => {
  if(!open) {
    return <></>;
  }

  return(
    <>
      <div onClick={close} className={styles.modal} />
      <form className={styles.modal__form} onSubmit={onSubmit} action=''>
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