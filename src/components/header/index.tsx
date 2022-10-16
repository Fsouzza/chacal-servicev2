import styles from './header.module.scss';
import logo from '../../assets/img/logo-chacal.png';
import { FiMenu } from 'react-icons/fi';
import { DropdownNotification, DropdownPerfil, DropdownSettings } from './dropdownMenus/dropDowns';

export const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.header__esquerda}>
        <div className={styles.header__menu}>
          <FiMenu />
        </div>
        <img className={styles.header__logo} src={logo} alt='Logo da empresa' />
        <strong>Chacal Service</strong>
      </div>
      <ul className={styles.header__lista}>
        <DropdownSettings />
        <DropdownNotification />
        <DropdownPerfil />
      </ul>
    </header>
  );
};