import styles from './footer.module.scss';
import logowhite from '../../assets/img/logoWhite.png';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io5';

export const Footer = () =>{
  const rotas = [{
    label: 'Home',
    to: '/'
  }, {
    label: 'Planos',
    to: '/planos'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }, {
    label: 'Contato',
    to: '/contato'
  }];

  return(
    <footer className={styles.footer}>
      <div>
        <img className={styles.footer__logo} src={logowhite} />
        <ul className={styles.footer__permalinks}>
          {rotas.map((rota, index) => (
            <li key={index} className={styles.footer__link}>
              <a href={rota.to}>
                {rota.label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.footer__socials}>
          <a href='https://www.facebook.com' title='Link Facebbok'><FaFacebook /></a>
          <a href='https://www.instagram.com' title='Link Instagram'><FiInstagram /></a>
          <a href='https://twitter.com' title='Link Twitter'><IoLogoTwitter /></a>
        </div>
      </div>
    </footer>
  );
};