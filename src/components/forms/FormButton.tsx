import { AiOutlineSend } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import styles from './FormsFields.module.scss';

interface ButtonsProps {
  title: string;
  onClick?: () => void;
}

const FormButton = ({ title, onClick }: ButtonsProps) => {
  return(
    <button onClick={onClick} className={title === 'Adicionar' ? `${styles.submit}` : `${styles.clear}`}>
      {title}
      {title === 'Adicionar' ? <AiOutlineSend /> : <BsTrash /> }
    </button>
  );
};

export default FormButton;