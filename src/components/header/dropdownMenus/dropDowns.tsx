import styles from './dropdown.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { BiBell, BiUser, BiLogOut, BiHelpCircle } from 'react-icons/bi';
import profilePicture from 'assets/img/profile/perfil.jpg';
import { useState, useRef } from 'react';
import { useEffect } from 'react';

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
    if(profileOpen){
      window.addEventListener('click', handleClickOutside);
    }
    return() => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [profileOpen]);

  
  const handleFocus = () => {
    setProfileOpen(!profileOpen);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function DropdownItemPerfil(props: any) {
    return(
      <li className={styles.profileMenu__item}>
        {props.img}
        <a href='#'>{props.text}</a>
      </li>
    );
  }

  return(
    <div ref={dropdownPerfil}>
      <button className={styles.link}>
        <img className={styles.link__profile} 
          src={profilePicture} 
          onClick={handleFocus}
        />
      </button>

      <div className={profileOpen ? `${styles.profileMenu}` : `${styles.profileMenu__inativo}`}>
        <div className={styles.profileMenu__titulo}>
          <h3>Filipe Souza</h3>
          <span>Assist. Administrativo</span>
        </div>
        <ul className={styles.profileMenu__items}>
          <DropdownItemPerfil img={<BiUser />} text={'Seu perfil'}/>
          <DropdownItemPerfil img={<BiHelpCircle />} text={'Ajuda'}/>
          <DropdownItemPerfil img={<BiLogOut />} text={'Sair'} />
        </ul>
        <div className={styles.profileMenu__termos}>
          <span>* Politica de Privacidade</span>
          <span>* Termos de Uso</span>
        </div>
      </div>
    </div>
  );
};

export const DropdownNotification = () => {
  return(
    <li>
      <button className={styles.link}><BiBell /></button>
    </li>
  );
};

export const DropdownSettings = () => {
  return(
    <li>
      <button className={styles.link}><AiOutlineSetting /></button>
    </li>
  );
};