import styles from './DropdownSettings.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import styles2 from '../../header.module.scss';
import { useEffect, useRef, useState } from 'react';

export const DropdownSettings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownSettings = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClickOutside = (e: any) => {
      if(settingsOpen && !dropdownSettings.current?.contains(e.target as Node)){
        setSettingsOpen(false);
      }
    };
    settingsOpen ? window.addEventListener('click', handleClickOutside) : window.removeEventListener('click', handleClickOutside);
  }, [settingsOpen]);

  const handleFocus = () => {
    setSettingsOpen(!settingsOpen);
  };

  return(
    <div ref={dropdownSettings}>
      <button 
        className={settingsOpen ? `${styles2.header__link__ativo}` : `${styles2.header__link}`}
        onClick={handleFocus}
      >
        <AiOutlineSetting />
      </button>

      <div className={settingsOpen ? `${styles.settingsMenu}` : `${styles.settingsMenu__inativo}`}>
        <div className={styles.settingsMenu__titulo}>
          <h3>Configurações rápidas</h3>
          <span>Escolha de temas</span>
        </div>
        <ul className={styles.settingsMenu__items}>
          <li className={styles.settingsMenu__item}>
            <button> Seu perfil</button>
          </li>
          <li className={styles.settingsMenu__item}>
            <button> Ajuda </button>
          </li>
          <li className={styles.settingsMenu__item}>
            <button> Sair </button>
          </li>
        </ul>
      </div>
    </div>
  );
};