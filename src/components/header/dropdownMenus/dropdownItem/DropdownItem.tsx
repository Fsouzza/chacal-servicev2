import styles from '../dropdownPerfil/DropdownPerfil.module.scss';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
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