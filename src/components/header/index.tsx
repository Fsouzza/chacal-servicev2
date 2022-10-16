import styles from './header.module.scss';
import logo from '../../assets/img/logo-chacal.png';
import { BiBell } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';
import profilePicture from 'assets/img/profile/perfil.jpg';


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
        <button className={styles.header__link}><AiOutlineSetting /></button>
        <button className={styles.header__link}><BiBell /></button>
        <button className={styles.header__link}><img className={styles.header__linkProfile} src={profilePicture} /></button>
      </ul>
    </header>
  );
};