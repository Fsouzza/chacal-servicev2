import styles from './FormsFields.module.scss';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';
import { SelectOption, SelectProps } from 'types/select';



export const SelectComponent = ({ value, onChange, options, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const placeholderModificada = `${placeholder}`;

  function selectOption(option: SelectOption){
    console.log(option.value);
    onChange(option);
  }

  return(
    <div 
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
      className={styles.container}
    >
      <div tabIndex={0} className={value?.value !== '' ? `${styles.hasFocus} ${styles.value}` : ` ${styles.value}`}>
        {value?.value}
        <div className={styles.value__caret}>{isOpen !== true ? <RiArrowDownSLine /> : <RiArrowUpSLine />}</div>
        <ul className={isOpen !== true ? `${styles.value__options}` : `${styles.value__options__show}`}>
          {options.map(option => 
            <li 
              key={option.value} 
              className={styles.option}
              onClick={e => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>)}
        </ul>
      </div>
      <span data-placeholder={placeholderModificada} className={styles.placeholder}></span>
    </div>
  );
};