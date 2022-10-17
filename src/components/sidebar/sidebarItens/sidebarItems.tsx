import styles from './sidebarItens.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SideBarItems = (props: any) => {
  return(
    <li className={styles.sidebarItems}>
      <div>{props.icon}</div>
      <p>{props.titulo}</p>
    </li>
  );
};