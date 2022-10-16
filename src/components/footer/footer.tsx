import styles from './footer.module.scss';
import logowhite from '../../assets/img/logoWhite.png';
import { FaFacebook } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io5';

export const Footer = () =>{
  const rotas = [{
    label: <FaFacebook />,
    text: 'Facebook',
    to: 'https://www.facebook.com'
  }, {
    label: <FiInstagram />,
    text: 'Instagram',
    to: 'https://www.instagram.com'
  }, {
    label: <IoLogoTwitter />,
    text: 'Twitter',
    to: 'https://twitter.com'
  }];

  return(
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <div className={styles.footer__img}>
          <img className={styles.footer__logo} src={logowhite} />
          <h3>Chacal Service</h3>
        </div>
        <div className={styles.footer__permalinks}>
          <h4>Permalinks</h4>
          <ul className={styles.footer__links}>
            {rotas.map((rota, index) => (
              <li key={index} className={styles.footer__link}>
                <a href={rota.to} target='blank' >
                  {rota.label}
                </a>
                {rota.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.footer__endereco}>
          <h4>Endereço</h4>
          <ul className={styles.footer__locais}>
            <li className={styles.footer__descricao}>Rua Hokkaido, 25 - Parque Dez</li>
            <li className={styles.footer__descricao}>CEP: 69000-000</li>
            <li className={styles.footer__descricao}>2 andar, sala C-4</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <small>Todos os direitos reservados | Copyright &copy; Mr Yeagger</small>
      </div>
    </footer>
  );
};