import styles from './FormsFields.module.scss';

interface inputProps {
  type: 'text' | 'email' | 'password' | 'date' | 'number';
  required?: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
  value: string | number
  placeholder: string
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

export const Input = ({ placeholder, type, value, setInput, required, onBlur, onFocus }: inputProps) => {
  const placeholderModificada = `${placeholder}`;

  return(
    <div className={styles.areaField}>
      <input
        className={value !== '' ? `${styles.hasVal} ${styles.input}` : ` ${styles.input}`}
        type={type}
        value={value}
        onChange={e => setInput(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required}
      />
      <label className={styles.focus} data-placeholder={placeholderModificada}></label>
    </div>
  );
};