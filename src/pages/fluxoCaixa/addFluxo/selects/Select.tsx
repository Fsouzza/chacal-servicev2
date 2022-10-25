
interface Props {
  label: string
  required?: boolean
  setSelected: React.Dispatch<React.SetStateAction<string>>
  value: string | number
  itens: string[] | number[]
  id?: string
  htmlFor?: string
  onFocus?: React.FocusEventHandler<HTMLSelectElement>
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
}

export const Select = (props: Props) => {
  return(
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <select 
        id={props.id} 
        required={props.required}
        value={props.value}
        onChange={evento => props.setSelected(evento.target.value)}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};