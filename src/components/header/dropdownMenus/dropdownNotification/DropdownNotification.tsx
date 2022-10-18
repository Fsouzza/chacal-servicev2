import { BiBell } from 'react-icons/bi';
import styles2 from '../../header.module.scss';

export const DropdownNotification = () => {
  return(
    <li>
      <button className={styles2.header__link}><BiBell /></button>
    </li>
  );
};