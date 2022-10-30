import styles from './header.module.scss';
import logo from '../../assets/img/logo-chacal.png';
import { FiMenu } from 'react-icons/fi';
import { DropdownSettings } from './dropdownMenus/dropdownSettings/DropdownSettings';
import { useRef, useState, useEffect } from 'react';
import { SideBar } from 'components/sidebar';
import { DropdownPerfil } from './dropdownMenus/dropdownPerfil/DropdownPerfil';
import { DropdownNotification } from './dropdownMenus/dropdownNotification/DropdownNotification';

export const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const ShowSidebar = () => setSidebar(!sidebar);
  const sideBarEvent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMenuClickOutside = (e: any) => {
      if(sidebar && !sideBarEvent.current?.contains(e.target as Node)){
        setSidebar(false);
      }
    };
    sidebar 
      ? window.addEventListener('click', handleMenuClickOutside) 
      : window.removeEventListener('click', handleMenuClickOutside);
  }, [sidebar]);

  return(
    <header className={styles.header}>
      <div className={styles.header__esquerda} ref={sideBarEvent}>
        <div className={sidebar ? `${styles.header__menu__btnAtivo}` : `${styles.header__menu}`} onClick={ShowSidebar}>
          <FiMenu />
          {sidebar && <SideBar active={setSidebar} />}
        </div>
        <img className={styles.header__logo} src={logo} alt='Logo da empresa' />
        <strong>Chacal Service</strong>
      </div>
      <ul className={styles.header__lista}>
        <DropdownNotification />
        <DropdownSettings />
        <DropdownPerfil />
      </ul>
    </header>
  );
};