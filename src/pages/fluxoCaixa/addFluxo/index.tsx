import { useState } from 'react';
import styles from './addfluxo.module.scss';
import { Input } from './inputs/Input';
import { Select } from './selects/Select';

export const AddFluxoCaixa = () => {
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
  const documentos = ['', 'Comprovante', 'NFCe', 'NF', 'Recibo', 'S/ Recibo'];
  const lancamentos = ['', 'Entrada', 'Saída'];
  const categorias = ['', 'Compra', 'Despesa', 'Pagamentos', 'Receita', 'Refeição', 'Retirada', 'Serviços', 'Vale Transporte', 'Veiculo', 'VR+VT'];
  const departamentos = ['', 'Administrativo', 'Financeiro', 'Officeboy', 'Operacional', 'Recursos Humanos', 'Tercerizados'];
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
    <form id='add' className={styles.add}>
      <Input 
        placeholder='Número do documento' 
        label='Nº ID' id='numero' htmlFor='numero' type='text' 
        onFocus={(e) => (e.target.type='number')} 
        onBlur={(e) => (e.target.type='text')}  
        setInput={value => setIdField(value)}
        required={true} value={idField}
      />
      <Input  
        placeholder='Descrição do Item' 
        label='Item' id='item' htmlFor='item' type='text'
        value={itemField} 
        setInput={value => setItemField(value)}
        required={true}
      />
      <Input 
        placeholder='Insira a data de emissão' 
        label='Data' id='data' htmlFor='data' type='text' 
        onFocus={(e) => (e.target.type='date')} 
        onBlur={(e) => (e.target.type='text')}
        value={dataField} 
        setInput={value => setDataField(value)}
        required={true}
      />
      <Select 
        htmlFor='lancamento' label='Lançamento' id='lancamento' 
        itens={lancamentos} 
        value={lancamentoField} 
        setSelected={value => setLancamentoField(value)}
        required={true}
      />
      <Select 
        htmlFor='doc' label='Tipo Documento' id='doc'
        itens={documentos} 
        value={docField} 
        setSelected={value => setDocField(value)}
        required={true}
      />
      <Select 
        htmlFor='categoria' label='Categoria' id='categoria'
        itens={categorias} 
        value={categoriaField} 
        setSelected={value => setCategoriaField(value)}
        required={true}
      />
      <Select 
        htmlFor='dpto' label='Departamento' id='dpto'
        itens={departamentos} 
        value={deptoField} 
        setSelected={value => setDeptoField(value)}
        required={true}
      />
      <Input 
        placeholder='Informe o local' 
        label='Local' id='local' htmlFor='local' type='text' 
        value={localField} 
        setInput={value => setLocalField(value)}
        required={true}
      />
      <Input 
        placeholder='Insira o valor' 
        label='Valor (R$)' id='numero' htmlFor='valor' type='text' 
        onFocus={(e) => (e.target.type='number')} 
        onBlur={(e) => (e.target.type='text')} 
        value={valorField} 
        setInput={value => setValorField(value)}
        required={true}
      />
      <Input 
        placeholder='Insira informação adicional' 
        label='Observação' id='obs' htmlFor='obs' type='text' 
        value={obsField} 
        setInput={value => setObsField(value)}
        required={true}
      />
      <div>
        <button onSubmit={clearFields}>
          Adicionar
        </button>
      </div>
    </form>
  );
};