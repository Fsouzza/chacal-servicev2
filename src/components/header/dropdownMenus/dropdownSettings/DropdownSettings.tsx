import styles from './DropdownSettings.module.scss';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsMoon, BsSun } from 'react-icons/bs';
import Switch from 'react-switch';
import styles2 from '../../header.module.scss';
import { createContext, useEffect, useRef, useState } from 'react';

type ContextProps = {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ContextProps);

export const DropdownSettings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const dropdownSettings = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState('dark');

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

  const toggleTheme = () => {
    setTheme((corr) => (corr === 'light' ? 'dark' : 'light'));
  };

  return(
    <div ref={dropdownSettings}>
      <button 
        className={settingsOpen ? `${styles2.link__ativo}` : `${styles2.link}`}
        onClick={handleFocus}
      >
        <AiOutlineSetting />
      </button>

      <ThemeContext.Provider value={{ theme, toggleTheme}}>
        <div className={settingsOpen ? `${styles.settingsMenu}` : `${styles.settingsMenu__inativo}`} id={theme}>
          <div className={styles.titulo}>
            <h3>Configurações</h3>
          </div>
          <ul className={styles.items}>
            <span>Escolha o modo</span>
            <li>
              <BsMoon />
              <Switch 
                onChange={toggleTheme}
                checked={theme === 'dark'}
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
      </ThemeContext.Provider>
    </div>
  );
};