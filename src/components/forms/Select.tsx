import styles from './FormsFields.module.scss';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useState } from 'react';

interface PropsSelect {
  placeholder: string
  required?: boolean
  setSelected: React.Dispatch<React.SetStateAction<string>>
  value: string | number
  itens: string[] | number[]
}

export const Select = (props: PropsSelect) => {
  const placeholderModificada = `${props.placeholder}`;

  return(
    <div className={styles.areaField}>
      <select className={props.value !== '' ? `${styles.hasVal} ${styles.input}` : ` ${styles.input}`}
        required={props.required}
        value={props.value}
        onChange={evento => props.setSelected(evento.target.value)}
      >
        {props.itens.map(item => <option className={styles.option} key={item}>{item}</option>)}
      </select>
      <label className={styles.focus} data-placeholder={placeholderModificada}></label>
    </div>
  );
};


export type SelectOption = {
  label: string;
  value?: string | number | undefined;
}

type SelectProps = {
  placeholder: string;
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

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