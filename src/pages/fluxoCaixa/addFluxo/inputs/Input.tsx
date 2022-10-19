interface Props {
  htmlFor: string
  id: string
  label: string
  type: string
  required: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
  value: number | string
  placeholder: string
}

export const Input = (props: Props) => {
  const placeholderModificada = `${props.placeholder}`;

  return(
    <div>
      <label htmlFor={props.htmlFor}>
        {props.label}
      </label>
      <input 
        id={props.id} 
        type={props.type} 
        value={props.value} 
        required={props.required}
        placeholder={placeholderModificada}
        onChange={e => props.setInput(e.target.value)} 
      />
    </div>
  );
};