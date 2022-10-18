
interface Props {
  label: string
  required: boolean
  setSelected: React.Dispatch<React.SetStateAction<string>>
  value: string
  itens: string[]
  id: string
  htmlFor: string
}

export const Select = (props: Props) => {
  return(
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <select 
        id={props.id} 
        required={props.required}
        onChange={evento => props.setSelected(evento.target.value)}
        value={props.value}
      >
        {props.itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};