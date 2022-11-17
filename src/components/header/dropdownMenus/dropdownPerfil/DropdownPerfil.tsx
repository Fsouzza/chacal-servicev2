import profilePicture from 'assets/img/profile/perfil.jpg';
import { username } from 'helpers/username';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { BiUser, BiLogOut, BiHelpCircle } from 'react-icons/bi';
import styles2 from '../../header.module.scss';
import styles from './DropdownPerfil.module.scss';

const optionsPerfil = [
  {label: 'Seu perfil', icon: <BiUser />},
  {label: 'Ajuda', icon: <BiHelpCircle />},
];

export const DropdownPerfil = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownPerfil = useRef<HTMLDivElement>(null);
  const handleFocus = () => { setProfileOpen(!profileOpen); };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (e: any) => {
      if(profileOpen && !dropdownPerfil.current?.contains(e.target as Node)){
        setProfileOpen(false);
      }
    };
    profileOpen ? window.addEventListener('click', handleClickOutside) : window.removeEventListener('click', handleClickOutside);
  }, [profileOpen]);

  return(
    <div ref={dropdownPerfil}>
      <button className={profileOpen ? `${styles2.link__ativo}` : `${styles2.link}`}>
        <img className={styles.profileMenu__profile} 
          src={profilePicture} 
          onClick={handleFocus}
        />
      </button>
      <div className={profileOpen ? `${styles.profileMenu}` : `${styles.profileMenu__inativo}`}>
        <div className={styles.profileMenu__titulo}>
          <h3>{username}</h3>
          <span>Assist. Administrativo</span>
        </div>
        <ul className={styles.profileMenu__items}>
          {optionsPerfil.map(option => (
            <li key={option.label}>
              <button className={styles.button}>{option.icon}{option.label}</button>
            </li>
          ))}
          <li>
            <button className={styles.buttonRed}><BiLogOut /> Desconectar</button>
          </li>
        </ul>
        <div className={styles.profileMenu__termos}>
          <span>* Politica de Privacidade</span>
          <span>* Termos de Uso</span>
        </div>
      </div>
    </div>
  );
};