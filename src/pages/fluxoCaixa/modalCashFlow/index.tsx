import { ModalWindow } from 'components/modalWindow';
import { Input } from 'components/forms/inputs/Input';
import { Select } from 'components/forms/selects/Select';
import { useState } from 'react';
import styles from './modalCashFlow.module.scss';
import { AiOutlineSend } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

interface PropsModalCash {
  open: boolean
  close: () => void
}

export const ModalCashFlow = ({ open, close }: PropsModalCash) => {
  const [dataField, setDataField] = useState('');
  const [lancamentoField, setLancamentoField] = useState('');
  const [categoriaField, setCategoriaField] = useState('');
  const [deptoField, setDeptoField] = useState('');
  const [docField, setDocField] = useState('');
  const [idField, setIdField] = useState('');
  const [localField, setLocalField] = useState('');
  const [itemField, setItemField] = useState('');
  const [obsField, setObsField] = useState('');
  const [valorField, setValorField] = useState('');
  const lancamentos = ['', 'Entrada', 'Saída'];
  const documentos = ['', 'Comprovante', 'NFCe', 'NF', 'Recibo', 'S/ Recibo'];
  const categorias = ['', 'Compra', 'Despesa', 'Pagamentos', 'Receita', 'Refeição', 'Retirada', 'Serviços', 'Vale Transporte', 'Veiculo', 'VR+VT'];
  const departamentos = ['', 'Administrativo', 'Financeiro', 'Officeboy', 'Operacional', 'Recursos Humanos', 'Tercerizados'];

  const IsSubmit = () => {
    console.log('Você clicou!');
    close();
  };

  const clearFields = () => {
    setDataField('');
    setLancamentoField('');
    setCategoriaField('');
    setDeptoField('');
    setDocField('');
    setIdField('');
    setLocalField('');
    setItemField('');
    setObsField('');
    setValorField('');
  };

  return(
    <ModalWindow title='Movimentação de caixa' open={open} close={close}>
      <div className={styles.components}>
        <Input 
          placeholder='Número do documento' 
          type='text' 
          onFocus={(e) => (e.target.type='number')} 
          onBlur={(e) => (e.target.type='text')}  
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
          type='text' 
          onFocus={(e) => (e.target.type='number')} 
          onBlur={(e) => (e.target.type='text')} 
          value={valorField} 
          setInput={value => setValorField(value)}
          required={true}
        />
        <Select
          placeholder='Tipo de lançamento'
          itens={lancamentos} 
          value={lancamentoField} 
          setSelected={value => setLancamentoField(value)}
          required={true}
        />
        <Select
          placeholder='Tipo de documento'
          itens={documentos} 
          value={docField} 
          setSelected={value => setDocField(value)}
          required={true}
        />
        <Select
          placeholder='Tipo de categoria'
          itens={categorias} 
          value={categoriaField} 
          setSelected={value => setCategoriaField(value)}
          required={true}
        />
        <Select 
          placeholder='Departamento'
          itens={departamentos} 
          value={deptoField} 
          setSelected={value => setDeptoField(value)}
          required={true}
        />
        <Input 
          placeholder='Local de compra ou destino' 
          type='text' 
          value={localField} 
          setInput={value => setLocalField(value)}
          required={true}
        />
        <Input 
          placeholder='Informação ou observação adicional' 
          type='text' 
          value={obsField} 
          setInput={value => setObsField(value)}
          required={false}
        />
      </div>
      <div className={styles.wrapper}>
        <button onSubmit={IsSubmit} className={styles.submit}>
          Adicionar
          <AiOutlineSend />
        </button>
        <button onClick={clearFields} className={styles.clear}>
          Reset
          <BsTrash />
        </button>
      </div>
    </ModalWindow>
  );
};