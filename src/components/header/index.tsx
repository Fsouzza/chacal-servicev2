import styles from './header.module.scss';
import logo from '../../assets/img/logo-chacal.png';
import { FiMenu } from 'react-icons/fi';
import { DropdownSettings } from './dropdownMenus/dropdownSettings/DropdownSettings';
import { useState } from 'react';
import { SideBar } from 'components/sidebar';
import { DropdownPerfil } from './dropdownMenus/dropdownPerfil/DropdownPerfil';
import { DropdownNotification } from './dropdownMenus/dropdownNotification/DropdownNotification';

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);

  return(
    <header className={styles.header}>
      <div className={styles.header__esquerda}>
        <div className={styles.header__menu} onClick={ShowSidebar}>
          <FiMenu />
        </div>
        {sidebar && <SideBar active={setSidebar} />}
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