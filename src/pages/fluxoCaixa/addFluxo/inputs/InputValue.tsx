interface Props {
  htmlFor: string
  id: string
  label: string
  type: string
  required: boolean
  setInput: React.Dispatch<React.SetStateAction<number>>
  value: number
  placeholder: string
}

export const InputValue = ({ htmlFor, id, label, type, required, setInput, value, placeholder}: Props) => {
  const placeholderModificada = `${placeholder}`;

  return(
    <div>
      <label htmlFor={htmlFor}>
        {label}
      </label>
      <input 
        id={id} 
        type={type} 
        value={value} 
        required={required}
        placeholder={placeholderModificada}
        onChange={e => setInput(parseFloat(e.target.value))} 
      />
    </div>
  );
};