import styles from './footer.module.scss';
import logowhite from 'assets/img/logoWhite.png';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io5';

const rotas = [{
  titulo: 'Facebook',
  label: <FaFacebook />,
  to: 'https://www.facebook.com'
}, {
  titulo: 'Instagram',
  label: <FiInstagram />,
  to: 'https://www.instagram.com'
}, {
  titulo: 'Twitter',
  label: <IoLogoTwitter />,
  to: 'https://twitter.com'
}];

const Footer = () =>{
  return(
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div>
          <h3 className={styles.footer__titulo}>Chacal Service</h3>
        </div>
        <div>
          <img className={styles.footer__logo} src={logowhite} />
        </div>
        <div>
          <ul className={styles.footer__links}>
            {rotas.map((rota, index) => (
              <li key={index} className={styles.footer__links__link}>
                <a href={rota.to} title={rota.titulo} target='blank' >
                  {rota.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <small>Desenvolvido por Mr Yeagger</small>
        <p>|</p>
        <small>Copyright &copy; Chacal Service</small>
      </div>
    </footer>
  );
};

export default Footer;