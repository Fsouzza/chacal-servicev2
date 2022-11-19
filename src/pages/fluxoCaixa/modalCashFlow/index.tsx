import { ModalWindow } from 'components/modalWindow';
import FormSelect from 'components/forms/FormSelect';
import { useState } from 'react';
import styles from './modalCashFlow.module.scss';
import { SelectOption } from 'types/select';
import FormInput from 'components/forms/FormInput';
import FormButton from 'components/forms/FormButton';
import Snackbar from 'common/context/snackbar';

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
  const [isOpen, setIsOpen] = useState(false);

  function showSnackbar(){
    setIsOpen(true);
    setTimeout( () => {
      setIsOpen(false);
    }
    , 2500
    );
  }

  const IsSubmit = () => {
    console.log('Você clicou!');
    showSnackbar();
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
    <>
      {!isOpen ? null : <Snackbar type='Success' message='Cadastro realizado com sucesso' />}
      <ModalWindow title='Adicionar transação' open={open} close={close}>
        <div className={styles.components}>
          <FormInput 
            placeholder='Número do documento' 
            type='number' 
            value={idField}
            setInput={value => setIdField(value)}
            required={true} 
          />
          <FormInput  
            placeholder='Descrição do Item' 
            type='text'
            value={itemField} 
            setInput={value => setItemField(value)}
            required={true}
          />
          <FormInput 
            placeholder='Data de emissão' 
            type='text' 
            onFocus={(e) => (e.target.type='date')} 
            onBlur={(e) => (e.target.type='text')}
            value={dataField} 
            setInput={value => setDataField(value)}
            required={true}
          />
          <FormInput 
            placeholder='Valor do item (R$)' 
            type='number' 
            value={valorField} 
            setInput={value => setValorField(value)}
            required={true}
          />
          <FormSelect 
            placeholder='Tipo de lançamento' 
            options={lancamentos} 
            value={lancamentoField} 
            onChange={o => setLancamentoField(o)} 
          />
          <FormSelect 
            placeholder='Tipo de documento' 
            options={documentos} 
            value={docField} 
            onChange={o => setDocField(o)} 
          />
          <FormSelect 
            placeholder='Tipo de categoria' 
            options={categorias} 
            value={categoriaField} 
            onChange={o => setCategoriaField(o)} 
          />
          <FormSelect 
            placeholder='Departamentos' 
            options={departamentos} 
            value={deptoField} 
            onChange={o => setDeptoField(o)} 
          />
          <FormInput 
            placeholder='Local destinado' 
            type='text' 
            value={localField} 
            setInput={value => setLocalField(value)}
            required={true}
          />
          <FormInput 
            placeholder='Informação adicional' 
            type='text' 
            value={obsField} 
            setInput={value => setObsField(value)}
            required={false}
          />
        </div>
        <div className={styles.wrapper}>
          <FormButton title={'Adicionar'} onClick={IsSubmit} />
          <FormButton title={'Limpar'} onClick={clearFields} />
        </div>
      </ModalWindow>
    </>
  );
};