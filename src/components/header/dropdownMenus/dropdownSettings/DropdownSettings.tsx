import styles from './DropdownSettings.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import styles2 from '../../header.module.scss';

export const DropdownSettings = () => {
  return(
    <li>
      <button className={styles2.header__link}><AiOutlineSetting /></button>
    </li>
  );
};