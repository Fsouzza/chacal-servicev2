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
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  function showSnackbarSuccess(){
    setIsSuccess(true);
    setTimeout( () => {
      setIsSuccess(false);
    }
    , 2500
    );
    setTimeout( () => {
      close();
    }
    , 2000
    );
  }

  function showSnackbarWarning(){
    setIsWarning(true);
    setTimeout( () => {
      setIsWarning(false);
    }
    , 2500
    );
  }

  const IsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Informações salvas: ', dataField, idField, localField, itemField, obsField, valorField, docField?.value );
  };

  const salveFields = () => {
    showSnackbarSuccess();
  };
  
  const clearFields = () => {
    showSnackbarWarning();
    setDataField('');
    setIdField('');
    setLocalField('');
    setItemField('');
    setObsField('');
    setValorField('');
    setDocField(documentos[0]);
    setLancamentoField(lancamentos[0]);
    setCategoriaField(categorias[0]);
    setDeptoField(departamentos[0]);
    showSnackbarWarning();
  };

  return(
    <>
      {!isSuccess ? null : <Snackbar type='Success' message='Cadastro realizado com sucesso' />}
      {!isWarning ? null : <Snackbar type='Alert' message='Os campos foram limpos!' />}
      <ModalWindow title='Adicionar transação' open={open} close={close} onSubmit={IsSubmit}>
        <div className={styles.components}>
          <FormInput 
            placeholder='Número do documento' 
            type='number' 
            value={idField}
            setInput={value => setIdField(value)} 
          />
          <FormInput  
            placeholder='Descrição do Item' 
            type='text'
            value={itemField} 
            setInput={value => setItemField(value)}
          />
          <FormInput 
            placeholder='Data de emissão' 
            type='text' 
            onFocus={(e) => (e.target.type='date')} 
            onBlur={(e) => (e.target.type='text')}
            value={dataField} 
            setInput={value => setDataField(value)}
          />
          <FormInput 
            placeholder='Valor do item (R$)' 
            type='number' 
            value={valorField} 
            setInput={value => setValorField(value)}
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
          />
          <FormInput 
            placeholder='Informação adicional' 
            type='text' 
            value={obsField} 
            setInput={value => setObsField(value)}
          />
        </div>
        <div className={styles.wrapper}>
          <FormButton title={'Adicionar'} onClick={salveFields}  />
          <FormButton title={'Limpar'} onClick={clearFields} />
        </div>
      </ModalWindow>
    </>
  );
};