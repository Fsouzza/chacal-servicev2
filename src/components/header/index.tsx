import styles from './header.module.scss';
import logo from '../../assets/img/logo-chacal.png';
import { BiComment, BiBell, BiUser } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FiMenu } from 'react-icons/fi';


export const Header = () => {
  return(
    <header className={styles.header}>
      <div>
        <div className={styles.header__menu}>
          <FiMenu />
        </div>
        <img className={styles.header__logo} src={logo} alt='Logo da empresa' />
        <strong>Chacal Service</strong>
      </div>
      <ul className={styles.header__lista}>
        <li className={styles.header__link}><BiBell /></li>
        <li className={styles.header__link}><BiComment /></li>
        <li className={styles.header__link}><BiUser /> <RiArrowDownSLine /></li>
      </ul>
    </header>
  );
};