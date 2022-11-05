import { NavLink } from 'react-router-dom';
import styles from './sidebarItens.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SideBarItems = (props: any) => {
  return(
    <li className={styles.navLinks}>
      <NavLink to={props.link} className={(navData)=> navData.isActive ? `${styles.link__active}` : `${styles.link}`}>
        <div>
          {props.icon}
          {props.titulo}
        </div>
      </NavLink>
    </li>
  );
};