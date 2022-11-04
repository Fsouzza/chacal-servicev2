import styles from './DropdownSettings.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import Switch from 'react-switch';
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
        className={settingsOpen ? `${styles2.link__ativo}` : `${styles2.link}`}
        onClick={handleFocus}
      >
        <AiOutlineSetting />
      </button>

      <div className={settingsOpen ? `${styles.settingsMenu}` : `${styles.settingsMenu__inativo}`}>
        <div className={styles.titulo}>
          <h3>Configurações</h3>
        </div>
        <ul className={styles.items}>
          <span>Escolha o modo</span>
          <li>
            <BsMoon />
            <Switch 
              onChange={() => []}
              checked={false}
              handleDiameter={18}
              height={8}
              offColor='#4f4f4f'
              onColor='#202020'
              uncheckedIcon={false}
              checkedIcon={false}
              width={40}
            />
            <BsSun />
          </li>
        </ul>
      </div>
    </div>
  );
};