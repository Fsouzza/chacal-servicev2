import { useEffect, useRef, useState } from 'react';
import { BiBell } from 'react-icons/bi';
import styles from './DropdownNotification.module.scss';
import styles2 from '../../header.module.scss';
import { username } from 'helpers/username';

const notificationsList = [
  {id: 1,icon: 'FS', title: `Parabéns ${username}!`, text: 'Você é o funcionário do mês', data: 'Hoje', background: '#3d5d81'},
  {id: 2,icon: 'CT', title: 'Novo contrato.', text: '5 horas atrás', data: 'Ontem', background: '#3d8181'},
  {id: 4,icon: 'MS', title: 'Mensagens recebidas.', text: '10 novas mensagens não lidas', data: '11 Out', background: '#4e3d81'},
  {id: 5,icon: 'BL', title: 'Pagamento realizado', text: 'Pagamento recebido', data: '10 Out', background: '#3d8146'},
  {id: 6,icon: 'RH', title: 'Novo funcionário', text: 'Funcionário cadastrado', data: '09 Out', background: '#81813d'},
];

export const DropdownNotification = () => {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const dropdownNotification = useRef<HTMLDivElement>(null);
  const handleFocus = () => { setNotificationOpen(!notificationOpen); };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (e: any) => {
      if(notificationOpen && !dropdownNotification.current?.contains(e.target as Node)){
        setNotificationOpen(false);
      }
    };
    notificationOpen ? window.addEventListener('click', handleClickOutside) : window.removeEventListener('click', handleClickOutside);
  }, [setNotificationOpen]);
  
  return(
    <div className={styles2.notification} ref={dropdownNotification}>
      <button 
        className={notificationOpen ? `${styles2.link__ativo}` : `${styles2.link}`}
        onClick={handleFocus}
      >
        <BiBell />
      </button>
      <div className={styles2.circle}></div>
      <div className={notificationOpen ? `${styles.notificationMenu}` : `${styles.notificationMenu__inativo}`}>
        <div className={styles.titulo}>
          <h3>Notificações</h3>
          <span>6 novas</span>
        </div>
        {notificationsList.map(notification => (
          <div key={notification.id} className={styles.info}>
            <div className={styles.info__icon} style={{background: notification.background}}>{notification.icon}</div>
            <div className={styles.info__content}>
              <h5>{notification.title}</h5>
              <p>{notification.text}</p>
            </div>
            <div className={styles.info__data}>{notification.data}</div>
          </div>
        ))}
        <div className={styles.button}>
          <button className={styles.button__content}>Todas as Notificações</button>
        </div>
      </div>
    </div>
  );
};