import styles from '../FormsFields.module.scss';

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