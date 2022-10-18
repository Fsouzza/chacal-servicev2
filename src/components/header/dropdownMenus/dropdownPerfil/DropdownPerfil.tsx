import profilePicture from 'assets/img/profile/perfil.jpg';
import { username } from 'helpers/username';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { BiUser, BiLogOut, BiHelpCircle } from 'react-icons/bi';
import styles2 from '../../header.module.scss';
import { DropdownItem } from '../dropdownItem/DropdownItem';
import styles from './DropdownPerfil.module.scss';

export const DropdownPerfil = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownPerfil = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (e: any) => {
      if(profileOpen && !dropdownPerfil.current?.contains(e.target as Node)){
        setProfileOpen(false);
      }
    };
    profileOpen 
      ? window.addEventListener('click', handleClickOutside) 
      : window.removeEventListener('click', handleClickOutside);
  }, [profileOpen]);

  
  const handleFocus = () => {
    setProfileOpen(!profileOpen);
  };

  return(
    <div ref={dropdownPerfil}>
      <button className={styles2.header__link}>
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
          <DropdownItem icon={<BiUser />} text={'Seu perfil'}/>
          <DropdownItem icon={<BiHelpCircle />} text={'Ajuda'}/>
          <DropdownItem icon={<BiLogOut />} text={'Sair'} />
        </ul>
        <div className={styles.profileMenu__termos}>
          <span>* Politica de Privacidade</span>
          <span>* Termos de Uso</span>
        </div>
      </div>
    </div>
  );
};