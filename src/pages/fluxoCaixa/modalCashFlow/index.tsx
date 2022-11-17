import { ModalWindow } from 'components/modalWindow';
import { Input } from 'components/forms/Input';
import { SelectComponent, SelectOption } from 'components/forms/Select';
import { useState } from 'react';
import styles from './modalCashFlow.module.scss';
import { AiOutlineSend } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

interface PropsModalCash {
  open: boolean
  close: () => void
}

const lancamentos = [
  {label: '', value: ''},
  {label: 'Entrada', value: 'Entrada'},
  {label: 'Saída', value: 'Saída'}
];
const documentos = [
  {label: '', value: ''}, 
  {label: 'Comprovante', value: 'Comprovante'}, 
  {label: 'NFCe', value: 'NFCe'}, 
  {label: 'NF', value: 'NF'}, 
  {label: 'Recibo', value: 'Recibo'}, 
  {label: 'S/ Recibo', value: 'S/ Recibo'}
];
const categorias = [
  {label: '', value: '' }, 
  {label: 'Compra', value: 'Compra' }, 
  {label: 'Despesa', value: 'Despesa' }, 
  {label: 'Pagamentos', value: 'Pagamentos' }, 
  {label: 'Receita', value: 'Receita' }, 
  {label: 'Refeição', value: 'Refeição' }, 
  {label: 'Retirada', value: 'Retirada' }, 
  {label: 'Serviços', value: 'Serviços' }, 
  {label: 'Vale Transporte', value: 'Vale Transporte' }, 
  {label: 'Veiculo', value: 'Veiculo' }, 
  {label: 'VR+VT', value: 'VR+VT' }
];
const departamentos = [
  {label: '', value: ''}, 
  {label: 'Administrativo', value: 'Administrativo'}, 
  {label: 'Financeiro', value: 'Financeiro'},
  {label: 'Officeboy', value: 'Officeboy'},
  {label: 'Operacional', value: 'Operacional'},
  {label: 'RH', value: 'RH'}, 
  {label: 'Tercerizados', value: 'Tercerizados'},
];

export const ModalCashFlow = ({ open, close }: PropsModalCash) => {
  const [docField, setDocField] = useState<SelectOption | undefined>(documentos[0]);
  const [lancamentoField, setLancamentoField] = useState<SelectOption | undefined>(lancamentos[0]);
  const [categoriaField, setCategoriaField] = useState<SelectOption | undefined>(categorias[0]);
  const [deptoField, setDeptoField] = useState<SelectOption | undefined>(departamentos[0]);
  const [dataField, setDataField] = useState('');
  const [idField, setIdField] = useState('');
  const [localField, setLocalField] = useState('');
  const [itemField, setItemField] = useState('');
  const [obsField, setObsField] = useState('');
  const [valorField, setValorField] = useState('');

  const IsSubmit = () => {
    console.log('Você clicou!');
    close();
  };
  
  const clearFields = () => {
    setDataField('');
    setIdField('');
    setLocalField('');
    setItemField('');
    setObsField('');
    setValorField('');
  };

  return(
    <ModalWindow title='Adicionar transação' open={open} close={close}>
      <div className={styles.components}>
        <Input 
          placeholder='Número do documento' 
          type='number' 
          value={idField}
          setInput={value => setIdField(value)}
          required={true} 
        />
        <Input  
          placeholder='Descrição do Item' 
          type='text'
          value={itemField} 
          setInput={value => setItemField(value)}
          required={true}
        />
        <Input 
          placeholder='Data de emissão' 
          type='text' 
          onFocus={(e) => (e.target.type='date')} 
          onBlur={(e) => (e.target.type='text')}
          value={dataField} 
          setInput={value => setDataField(value)}
          required={true}
        />
        <Input 
          placeholder='Valor do item (R$)' 
          type='number' 
          value={valorField} 
          setInput={value => setValorField(value)}
          required={true}
        />
        <SelectComponent 
          placeholder='Tipo de lançamento' 
          options={lancamentos} 
          value={lancamentoField} 
          onChange={o => setLancamentoField(o)} 
        />
        <SelectComponent 
          placeholder='Tipo de documento' 
          options={documentos} 
          value={docField} 
          onChange={o => setDocField(o)} 
        />
        <SelectComponent 
          placeholder='Tipo de categoria' 
          options={categorias} 
          value={categoriaField} 
          onChange={o => setCategoriaField(o)} 
        />
        <SelectComponent 
          placeholder='Departamentos' 
          options={departamentos} 
          value={deptoField} 
          onChange={o => setDeptoField(o)} 
        />
        <Input 
          placeholder='Local destinado' 
          type='text' 
          value={localField} 
          setInput={value => setLocalField(value)}
          required={true}
        />
        <Input 
          placeholder='Informação adicional' 
          type='text' 
          value={obsField} 
          setInput={value => setObsField(value)}
          required={false}
        />
      </div>
      <div className={styles.wrapper}>
        <button onClick={IsSubmit} className={styles.submit}>
          Adicionar
          <AiOutlineSend />
        </button>
        <button onClick={clearFields} className={styles.clear}>
          Limpar
          <BsTrash />
        </button>
      </div>
    </ModalWindow>
  );
};