interface Props {
  htmlFor: string
  id: string
  label: string
  type: 'text' | 'email' | 'password' | 'date' | 'number';
  required: boolean
  setInput: React.Dispatch<React.SetStateAction<string>>
  value: string | number
  placeholder?: string
}

export const Input = ({ htmlFor, id, label, type, required, setInput, value, placeholder}: Props) => {
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
        onChange={e => setInput(e.target.value)} 
      />
    </div>
  );
};