import { NavLink } from 'react-router-dom';
import { Imenu } from 'types/menu';
import styles from './sidebarItens.module.scss';

export const SideBarItems = (props: Imenu) => {
  return(
    <li className={styles.navLinks}>
      <NavLink to={props.to} className={(navData)=> navData.isActive ? `${styles.link__active}` : `${styles.link}`}>
        <div>
          {props.icon}
          {props.titulo}
        </div>
      </NavLink>
    </li>
  );
};