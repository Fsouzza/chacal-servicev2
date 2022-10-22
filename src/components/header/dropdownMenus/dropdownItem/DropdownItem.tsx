import styles from '../dropdownPerfil/DropdownPerfil.module.scss';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode
  text: string
}

export const DropdownItem = (props: Props ) => {
  return(
    <li className={styles.profileMenu__item}>
      {props.icon}
      <a href='#'>{props.text}</a>
    </li>
  );
};